const sliderView = (req, res) => {
  res.render("sliderLayout", {
    user: req.user,
  });
};

module.exports = {
  sliderView,
};
