const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
