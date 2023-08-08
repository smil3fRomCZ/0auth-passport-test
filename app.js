const express = require("express");

const homeRouter = require("./routes/homeRouter");
const authRouter = require("./routes/authRouter");

const app = express();

// Set view engine
app.set("view engine", "ejs");

// Set routes
app.use("/auth", authRouter);
app.use("/", homeRouter);

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
