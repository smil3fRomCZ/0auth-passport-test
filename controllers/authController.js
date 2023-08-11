exports.renderLoginPage = (req, res) => {
  res.render("loginPage", { user: req.user });
};

exports.googleLogout = (req, res) => {
  //handle with passport
  req.logout();
  res.redirect("/");
};
