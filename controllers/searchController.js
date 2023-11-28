const Listing = require("../models/Listing");

const searchResultsView = (req, res) => {
  res.render("search_results", {});
};

const getAllListings = async () => {
  try {
    const allListings = await Listing.find().select(
      "listing_name description listing_images price_per_day category max_duration owner"
    );

    return allListings;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getListingsByName = async (req, res) => {
  try {
    const searchName = req.body["search-input"];
    console.log(req.body);

    const allListings = await Listing.find({
      listing_name: { $regex: searchName, $options: "i" },
    }).select(
      "listing_name description listing_images price_per_day category max_duration owner"
    );

    res.render("search_results", { allListings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  searchResultsView,
  getAllListings,
  getListingsByName,
};
