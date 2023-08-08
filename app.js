const express = require("express");

const homeRouter = require("./routes/homeRouter");

const app = express();

// Set view engine
app.set("view engine", "ejs");

app.use("/", homeRouter);

app.listen(3000, () => {
  console.log(`Server is listening on port 3000`);
});
