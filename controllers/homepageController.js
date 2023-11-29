const homepageView = (req, res) => {
  res.render("home_page", {
    user: req.user,
  });
};

module.exports = {
  homepageView,
};
