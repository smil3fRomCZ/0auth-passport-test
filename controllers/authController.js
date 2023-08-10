exports.renderLoginPage = (req, res) => {
  res.render("loginPage");
};

exports.googleLogout = (req, res) => {
  //handle with passport
  res.send("Logging out");
};
