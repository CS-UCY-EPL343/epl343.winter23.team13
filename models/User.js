const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {   
     type: String,    
     required: true, 
      },
   rating: {
    type: Number,
  },
  isBanned: {
    type: Boolean,
  },
  profile_picture: {
    type: String
  },
  member_since: {
    type: Date,
    default: Date.now,
  },
  profile_description: {
    type: String,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;


