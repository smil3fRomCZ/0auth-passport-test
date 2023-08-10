const express = require("express");
const mongoose = require("mongoose");
const { mongoDB } = require("./config/dbConnect");

const passportSetup = require("./config/passportSetup");
const homeRouter = require("./routes/homeRouter");
const authRouter = require("./routes/authRouter");

const app = express();

// Set view engine
app.set("view engine", "ejs");

mongoose
  .connect(mongoDB)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(`DB error: ${err}`));

// Set routes
app.use("/auth", authRouter);
app.use("/", homeRouter);

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
