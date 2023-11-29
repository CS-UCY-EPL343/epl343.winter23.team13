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
const getListingsByFilter = async (req, res) => {
  try {
    const categories = req.body.category;
    const sorting = req.body.sorting;

    

    let allListings = await Listing.find().select(
      "listing_name description listing_images price_per_day category max_duration owner"
    );
    if(categories!=null && Array.isArray(categories))
    {
    allListings = await Listing.find({
      category: { $in: categories.map(category => new RegExp(category, 'i')) },
    }).select(
      "listing_name description listing_images price_per_day category max_duration owner"
    );
    }
    else if(categories!=null && typeof categories === 'string')
    {
      allListings = await Listing.find({
      category: { $regex: categories, $options: "i" },
      }).select(
        "listing_name description listing_images price_per_day category max_duration owner"
      ); 
    }
    
    if (sorting === "ascending" || sorting === "descending") {
      const sortOrder = sorting === "ascending" ? 1 : -1;
      allListings.sort((a, b) => (a.price_per_day - b.price_per_day) * sortOrder);
    }

    res.render("search_results", { allListings });
  } 
  catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};




const getListingsByName = async (req, res) => {
  try {
    const searchName = req.body["search-input"];
  

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
  getListingsByFilter,
};
