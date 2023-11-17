const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
  listing_name: {
    type: String,
    //required: true,
  },

  description: {
    type: String,
    //required: true,
  },
  listing_image: {
    type: String,
    //required: true,
    default: "../public/apple.jpg",
  },
  price_per_day: {
    type: Number,
    //required: true,
  },
  is_available: {
    type: Boolean,
    //required: false,
  },
  max_duration: {
    type: Number,
    //required: true,
  },
  category: {
    type: String,
    //required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    //required: true,
  },
});

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
