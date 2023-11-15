//js
const express = require("express");
const {
  registerView,
  loginView,
  registerUser,
  loginUser,
  landingPageView,
} = require("../controllers/loginController");
const { dashboardView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");

const router = express.Router();
router.get("/register", registerView);
router.get("/login", loginView);
router.get("/dashboard", protectRoute, dashboardView);
router.get("/landingPage", landingPageView);

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

module.exports = router;