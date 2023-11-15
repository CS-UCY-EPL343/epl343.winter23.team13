const mongoose = require("mongoose");


const ListingSchema = new mongoose.Schema({
    owner_name: {
      type: String
    },
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

    is_available: {
        type: Boolean,
    }, 
    max_duration: {
        type: Numeric,
        required: true,
    },
    category: {
      type: [String],
      required: true,
    }
  });
   

  const Listing = mongoose.model("Listing", ListingSchema)
  module.exports = Listing;



const DroneListing = new Listing({
  listing_name: "Sky Pulse",
  Description: "Discover the freedom of aerial exploration with the SkyPulse. Equipped with cutting-edge features like quantum stabilization, a 4K cinematic camera, and autonomous flight modes",
  listing_image: "/public/drone.png",
  price_per_day: 5.5,
  max_duration: 14,
  category: ["Electronics"],
  owner_name: "John Doe",
});

const PhotographyListing = new Listing({
  listing_name: "Canon Super Mark III",
  Description: "Capture stunning moments with the Canon Super Mark III. This professional camera boasts exceptional low-light performance, making it perfect for any lighting condition.",
  listing_image: "/path/canon.png",
  price_per_day: 25.0,
  max_duration: 7,
  category: ["Photography"],
  owner_name: "Jane Smith",
});

const GamingListing = new Listing({
  listing_name: "PlayStation 5",
  Description: "Experience gaming like never before with the PlayStation 5. Immerse yourself in stunning graphics and responsive gameplay.",
  listing_image: "/path/playstation_5.jpg",
  price_per_day: 15.0,
  max_duration: 10,
  category: ["Gaming", "Electronics"],
  owner_name: "Alex Johnson",
});

const OutdoorsListing = new Listing({
  listing_name: "Mountain Bike Explorer",
  Description: "Conquer the trails with our Mountain Bike Explorer. This rugged yet lightweight bike is equipped with responsive disc brakes and a durable frame, offering a smooth and safe ride.",
  listing_image: "/path/explorer.jpg",
  price_per_day: 12.0,
  max_duration: 5,
  category: ["Outdoors"],
  owner_name: "Chris Wilson",
});

const HomeListing = new Listing({
  listing_name: "DIY Tool Set",
  Description: "Get your home improvement projects done with our DIY Tool Set. This comprehensive set includes essential tools such as a drill, hammer, and screwdrivers. Tackle tasks with ease and precision, making your DIY projects a breeze.",
  listing_image: "/path/tools.webp",
  price_per_day: 9.0,
  max_duration: 12,
  category: ["Home", "Tools"],
  owner_name: "Emily Davis",
});

const VehicleListing = new Listing({
  listing_name: "Electric Scooter",
  Description: "Efficient and eco-friendly, our Electric Scooter is perfect for city commutes. Zip through traffic with ease and enjoy the convenience of eco-conscious transportation. With a foldable design, it's easy to carry and store wherever you go.",
  listing_image: "/path/electric_scooter.webp",
  price_per_day: 16.0,
  max_duration: 3,
  category: ["Vehicles", "Electronics"],
  owner_name: "Michael Brown",
});

// async function saveListings() {
//   try {
//     await DroneListing.save();
//     await PhotographyListing.save();
//     await GamingListing.save();
//     await OutdoorsListing.save();
//     await HomeListing.save();
//     await VehicleListing.save();
//     console.log('Listings saved successfully.');
//   } catch (error) {
//     console.error('Error saving listings:', error);
//   } 
// }

// // Call the function to save listings
// saveListings();

