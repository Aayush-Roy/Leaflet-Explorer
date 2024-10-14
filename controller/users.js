const User = require("../models/user");
module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup.ejs")
 }

module.exports.signup = async(req,res)=>{
    try{
        let{username,email,password} = req.body;
    const newUser = new User({email,username});
    const registeredUser = await User.register(newUser,password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if(err)
        {
            return next(err);
        }
        req.flash("success",`Welcome, ${username} to Our Website`)
        res.redirect("/listings");
    })
   
    }catch(e)
    {
        req.flash("error","User with given username is already exist!")
        res.redirect("/signup");
    }
    
}

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login.ejs");
}

module.exports.login = async (req, res) => {
    req.flash("success","Welcome back to Our Service!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.logout = (req,res,next)=>{
    req.logout((err)=>{
        if(err){
          return  next(err);
        }
        req.flash("warn","You are logged out!");
        res.redirect("/listings");
    })
}