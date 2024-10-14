const express = require("express");
const router = express.Router();


const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/Listing");
const {isLoggedIn, isOwner} = require("../middleware.js");
const {validateListing} = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer  = require('multer')


const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })

router.route("/")
.get(wrapAsync(listingController.index))
.post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));
// .post(upload.single('listing[image]'),(req,res)=>{
//     res.send(req.file);
// })
    
router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
.get(wrapAsync(listingController.showRoute))
.put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

// router.get("/",wrapAsync(listingController.index));



// router.post("/",isLoggedIn,validateListing,wrapAsync(listingController.createListing));

// router.get("/:id",wrapAsync(listingController.showRoute));

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.editListing));

// router.put("/:id",isLoggedIn,isOwner,validateListing,wrapAsync(listingController.updateListing));

// router.delete("/:id",isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));

module.exports = router;