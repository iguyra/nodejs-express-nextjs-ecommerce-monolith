const Product = require("../models/productModel");

exports.getAllProducts = async (req, res) => {
  const product = await Product.find();

  res.status(201).json({
    product,
  });
};

exports.createProduct = async (req, res) => {
  console.log("from createproduct");
  const { quntity, slug, name, description, image, price } = req.body;
  const product = await Product.create({
    name,
    description,
    image,
    price,
    slug,
    quntity,
  });

  res.status(201).json({
    product,
  });
};
