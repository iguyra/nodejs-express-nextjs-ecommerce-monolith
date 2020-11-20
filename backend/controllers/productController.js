const Product = require("../models/productModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllProducts = catchAsync(async (req, res) => {
  const product = await Product.find();

  res.status(201).json({
    product,
  });
});

exports.getProduct = catchAsync(async (req, res) => {
  
  const product = await Product.findById(req.params.id)

  if (!product) {
    return next(new AppError("no tour found", 401))
  }

  res.status(200).json({
    status: "success",
    product
  })
})

exports.createProduct = catchAsync(async (req, res) => {
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
});

exports.updateProduct = catchAsync(async (req, res) => {
  // const { name,
  //   description,
  //   image,
  //   price,
  //   slug,
  //   quntity, } = req.body
  
  
  const product = await Product.findByIdAndUpdate(req.params.id, req.body,{
    new: true,
    runValidators: true
  })  
 
  console.log(product)

  if (!product) {
    return next(new AppError("no tour has been found", 404))
  }

  res.status(200).json({
    status: "sucess",
    data: {
      product
    }
  })

})


exports.deleteProduct = catchAsync(async(req, res, next) => {
 const product =  await Product.findByIdAndDelete(req.params.id)

  if(!product) next(new AppError("no product found with that id", 404))
  
  res.status(204).json({
    status: "delete",
    data: null
  })


})