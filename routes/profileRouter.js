const profileRouter = require("express").Router();

const profileController = require("../controllers/profileController");
const { authCheck } = require("../middleware/authCheck");

profileRouter.get("/", authCheck, profileController.getProgilePage);

module.exports = profileRouter;
