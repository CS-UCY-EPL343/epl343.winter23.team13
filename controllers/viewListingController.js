const Listing = require("../models/Listing");
const listingDescriptionView = async (req, res) => {
  const listing = await Listing.findById(req.body.listingId);
  console.log(req.body.listingId);
  res.render("listing_description", {
    listing: listing,
  });
};

module.exports = {
  listingDescriptionView,
};
