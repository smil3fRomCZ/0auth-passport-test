exports.renderLoginPage = (req, res) => {
  res.render("loginPage");
};

exports.googleLogin = (req, res) => {
  // Handle with passport later
  res.send("Logging with google");
};

exports.googleLogout = (req, res) => {
  //handle with passport
  res.send("Logging out");
};
