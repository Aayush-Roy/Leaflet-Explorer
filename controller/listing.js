const Listing = require("../models/Listing");
module.exports.index = async(req,res)=>{
    let allListing = await Listing.find({});
    res.render("listings/index.ejs",{allListing})
}

module.exports.renderNewForm = (req,res)=>{
    res.render('listings/new.ejs');
}

module.exports.showRoute = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");
    console.log(listing);
    if(!listing)
    {
        req.flash("error","Listing you requested for doesn't exist! ");
        return res.redirect("/listings")
    }
    res.render("listings/show",{listing});
}

module.exports.createListing = async(req,res,next)=>{
    let url = req.file.path;
    let filename = req.file.filename;
    // if(!req.body.listing)
    // {
    //     throw new ExpressError(400,"Send valid data for listing!")
    // }
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename}
    let listing = await newListing.save();
    
    // console.log(listing);
    req.flash("success","New Listing Created");
    return res.redirect("/listings");
}

module.exports.editListing = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing)
        {
            req.flash("error","Listing you requested for doesn't exist! ");
           return res.redirect("/listings")
        }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250")
    res.render("listings/edit.ejs",{listing,originalImageUrl});
}

module.exports.updateListing = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    if(typeof req.file!=="undefined")
    {

        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename}
        await listing.save();
    }
    req.flash("success","Listing Updated Successfully");
    return res.redirect(`/listings/${id}`);
}

module.exports.destroyListing = async(req,res)=>{
    let{id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted Successfully");
    res.redirect("/listings");
}