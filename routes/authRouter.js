const authRouter = require("express").Router();

const authController = require("../controllers/authController");

// Login route
authRouter.get("/login", authController.renderLoginPage);

// Auth within google
authRouter.get("/google", authController.googleLogin);

// Logout
authRouter.get("/logout", authController.googleLogout);

module.exports = authRouter;
