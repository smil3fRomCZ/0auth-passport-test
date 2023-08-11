const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const { cookieKey } = require("./config/cookieKey");
const { mongoDB } = require("./config/dbConnect");
const passportSetup = require("./config/passportSetup");
const homeRouter = require("./routes/homeRouter");
const authRouter = require("./routes/authRouter");
const profileRouter = require("./routes/profileRouter");

const app = express();

// Set view engine
app.set("view engine", "ejs");

// Set cookies
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // Day in ms
    keys: [cookieKey],
  })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(mongoDB)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(`DB error: ${err}`));

// Set routes
app.use("/auth", authRouter);
app.use("/", homeRouter);
app.use("/profile", profileRouter);

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
