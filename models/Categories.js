const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
    category_name: {
      type: String,
      required: true,
    },
  });


  const Category = mongoose.model("Category", CategorySchema)
  module.exports = Category


  const categoriesData = [
    { category_name: "Home" },
    { category_name: "Tools" },
    { category_name: "Vehicles" },
    { category_name: "Electronics" },
    { category_name: "Outdoors" },
    { category_name: "Gaming" },
    { category_name: "Photography" },
  ];
  
  // async function saveCategories() {
  //   try {
  //     // Save each category asynchronously
  //     const savedCategories = await Promise.all(
  //       categoriesData.map(category => new Category(category).save())
  //     );
  
  //     console.log("Categories saved successfully:", savedCategories);
  //   } catch (error) {
  //     console.error("Error saving categories:", error);
  //   }
  // }
  
  // // Call the function to save categories
  // saveCategories();
