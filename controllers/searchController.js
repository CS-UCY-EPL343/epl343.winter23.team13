const Listing = require("../models/Listing");

const searchResultsView = (req, res) => {
  res.render("search", {});
};

/*
const getAllListings = async (req, res) => {
  try {


    const { sort, categories } = req.query;

    // Construct the query based on parameters
    const query = {};

    if (categories) {
      if (Array.isArray(categories)) {
        // If categories is an array, find listings that match any of the categories
        query.category = { $in: categories };
      } else {
        // If categories is not an array, find listings with that specific category
        query.category = categories;
      }
    }

    // Fetch listings from the database based on the query
    let listings;

    if (sort === 'price_ascending') {
      listings = await Listing.find(query).sort({ price: 1 });
    } else if (sort === 'price_descending') {
      listings = await Listing.find(query).sort({ price: -1 });
    } else {
      listings = await Listing.find(query);
    }

    // Send the listings as a response
    res.json(listings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
*/
const getAllListings = async (req,res) => {
  try {
    const allListings = await Listing.find().select(
      "listing_name description listing_images price_per_day category max_duration owner"
    );

    res.render("search_results", { allListings });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  searchResultsView,
  getAllListings,
};


module.exports = {
  searchResultsView,
  getAllListings,
};
