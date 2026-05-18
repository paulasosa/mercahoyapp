const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  supermarket: String,
  price: Number,
  image: String,
  category: String,
});

module.exports = mongoose.model("Product", productSchema); 