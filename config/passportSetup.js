const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");

const NinjaModel = require("../models/ninjaModel");
const { google } = require("./googleKeys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  NinjaModel.findById(id).then((user) => {
    done(null, user);
  });
});

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
      // Check if user already exist
      NinjaModel.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // already created user
          done(null, currentUser);
        } else {
          console.log(profile);
          // If not create a one
          new NinjaModel({
            user_name: profile.displayName,
            googleId: profile.id,
            thumbnail: profile._json.picture,
          })
            .save()
            .then((newUser) => {
              done(null, newUser);
            });
        }
      });
    }
  )
);
