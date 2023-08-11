exports.getProgilePage = (req, res) => {
  res.render("profilePage", { user: req.user });
};
