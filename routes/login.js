const express = require("express");
const {
  registerView,
  loginView,
  registerUser,
  loginUser,
  landingPageView,
  logoutUser,
} = require("../controllers/loginController");
const { dashboardView } = require("../controllers/dashboardController");
const { protectRoute } = require("../auth/protect");
const {
  createlistingView,
  newListing,
} = require("../controllers/listingcreateController");
const { homepageView } = require("../controllers/homepageController");
//const { upload, storage } = require("../index");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads/"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    console.log("File path:", file.fieldname + "-" + uniqueSuffix + ".jpg");
    cb(null, file.fieldname + "-" + uniqueSuffix + ".jpg");
  },
});

const upload = multer({ storage: storage });
const {
  getAllListings,
  searchResultsView,
  getListingsByName,
  getListingsByFilter,
} = require("../controllers/searchController");

//GET REQUESTS
router.get("/register", registerView);
router.get("/login", loginView);
router.get("/dashboard", protectRoute, dashboardView);
router.get("/landingPage", landingPageView);
router.get("/createlisting", protectRoute, createlistingView);
router.get("/", function (req, res, next) {
  res.redirect("/landingpage");
});
router.get("/searchResults", async (req, res) => {
  try {
    const allListings = await getAllListings();

    res.render("search_results", { allListings });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});


//
router.get("/home", homepageView);
router.get("/", function (req, res, next) {
  res.redirect("/landingpage");
});


router.post("/dashboard", protectRoute, dashboardView);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/createlisting", upload.array("listing_images", 5), (req, res) => {
  console.log(req.files);
  newListing(req, res);
});
router.post("/searchByName", getListingsByName);
router.post("/filterResults", getListingsByFilter);

module.exports = router;
