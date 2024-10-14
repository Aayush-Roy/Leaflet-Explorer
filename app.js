if(process.env.NODE_ENV !="production")
{
    require('dotenv').config()
}
console.log(process.env.SECRET)
const express = require("express");
const mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
// const MONGO_URL = "mongodb://127.0.0.1:27017/finalProject";

const dbUrl = process.env.ATLASDB_URL;

const app = express();
const path = require("path");
const ExpressError = require("./utils/ExpressError.js");


const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const session = require("express-session");
const flash = require("connect-flash");


const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");


app.use(express.json());
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");


const store = MongoStore.create({
    mongoUrl:dbUrl,
    crypto:{
        secret:process.env.SECRET,
    },
    touchAfter:24 * 3600,
})

store.on("error",()=>{
    console.log("ERROR IN MONGO-SESSION-STORE",err)
})

const sessionOptions = {
    store,
    secret:process.env.SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge:7 * 24 * 60 * 60 * 1000,
        httpOnly:true,
    },
}




app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


main()
.then(res=>console.log("DB connected successfully"))
.catch(err=>console.log(err));

async function  main() {
    await mongoose.connect(dbUrl)
}

app.get("/",(req,res)=>{
    res.send("Hi, I'm home root")
})

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.warning = req.flash("warn") 
    res.locals.currUser = req.user;
    next();
})



app.use("/listings",listingRouter);
app.use("/listings/:id/reviews",reviewRouter);
app.use("/",userRouter);
// app.get("/test",async(req,res)=>{
//     let newListing = new Listing({
//         title:"hello world",
//         description:"pagalworld.com",
//         price:789,
//         location:"haryana",
//         country:"India",
//     })
//     await newListing.save();
//     console.log("new listing saved");
//     res.send("success");
// })


//Review Route


app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"Page not found!"))
})

app.use((err,req,res,next)=>{
   let{statusCode=500, message="Some error Occured"} = err;
//    res.status(statusCode).send(message);
    res.status(statusCode).render("error.ejs",{message});
})

app.listen(8080,()=>{
    console.log(`app listening on port`);
})