const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware");
const userController = require("../controller/users");

router.route("/signup")
.get(userController.renderSignupForm)
.post(wrapAsync(userController.signup));

// router.get("/signup",userController.renderSignupForm);

// router.post("/signup",wrapAsync(userController.signup));

router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
userController.login);

// router.get("/login",userController.renderLoginForm);

// router.post("/login",saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }),
// userController.login);
 
router.get("/logout",userController.logout)


module.exports = router;