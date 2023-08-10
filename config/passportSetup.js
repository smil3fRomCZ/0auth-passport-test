const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const NinjaModel = require("../models/ninjaModel");
const { google } = require("./googleKeys");

passport.use(
  new GoogleStrategy(
    {
      // Options for strategy
      callbackURL: "http://localhost:3000/auth/google/redirect",
      clientID: google.clientID,
      clientSecret: google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      // passport callback function
      console.log("Passport callback");
      console.log(profile);
      new NinjaModel({
        user_name: profile.displayName,
        googleId: profile.id,
      })
        .save()
        .then((newUser) => {
          console.log("New user created!", newUser);
        });
    }
  )
);
