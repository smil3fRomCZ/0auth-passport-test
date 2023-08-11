exports.getHomePage = (req, res) => {
  res.render("homePage", { user: req.user });
};
