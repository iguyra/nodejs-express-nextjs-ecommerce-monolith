const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  slug: {
    type: String,
  },
  quantity: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
