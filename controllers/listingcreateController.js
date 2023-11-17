const Listing = require("../models/Listing");
const User = require("../models/User");
const createlistingView = (req, res) => {
  res.render("listingcreate", {
    user: req.user,
  });
};

const newListing = (req, res) => {
  console.log(req.body);
  const { listing_name, description, category, duration, ppd } = req.body;

  if (!listing_name || !description || !ppd || !duration || !category) {
    console.log("Fill empty fields");
  } else {
    const newListing = new Listing({
      listing_name,
      description,
      ppd,
      duration,
      category,
      is_available: true,
      owner: req.user,
    });
    User.findOne({ _id: req.user.id }, (err, owner) => {
      console.log("New listing by " + owner);
      newListing.save();
      if (owner.listings === undefined) {
        owner.listings = [];
      }
      owner.listings.push(newListing);
      owner.save();
    });
    res.redirect("/dashboard");
  }
};

module.exports = {
  createlistingView,
  newListing,
};
