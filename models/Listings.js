const mongoose = require("mongoose");


const ListingSchema = new mongoose.Schema({
    listing_name: {
      type: String,
      required: true,
    },
  
    Description: {
      type: String,
      required: true,
    },
    listing_image: {
      type: String,
      required: true,
    },
    price_per_day: {   
       type: Number,    
       required: true, 
        },
    quantity: {
      type: Number,
      required: true,
    },
    is_available: {
        type: Boolean,
    }, 
    max_duration: {
        type: Numeric,
        required: true,
    },
  });


  const Listing = mongoose.model("Listing", ListingSchema)
  //module.exports = Listing;