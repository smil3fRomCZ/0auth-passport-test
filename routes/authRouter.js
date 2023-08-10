const passport = require("passport");

const authRouter = require("express").Router();

const authController = require("../controllers/authController");

// Login route
authRouter.get("/login", authController.renderLoginPage);

// Auth within google
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

// callback route for google
authRouter.get(
  "/google/redirect",
  passport.authenticate("google"),
  (req, res) => {
    res.send("You reached callback URI");
  }
);

// Logout
authRouter.get("/logout", authController.googleLogout);

module.exports = authRouter;
