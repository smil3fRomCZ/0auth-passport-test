const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const { google } = require("./googleKeys");

passport.use(
  new GoogleStrategy({
    // Options for strategy
    clientID: google.clientID,
    clientSecret: google.clientSecret,
  }),
  () => {
    // passport callback function
  }
);
