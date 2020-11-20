const axios = require("axios");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");



exports.getAllUsers = catchAsync(async(req, res, next) => {
    const users = await User.find()
    
    res.status(200).json({
        status: "succss",
        users
    })
})

exports.updateMe = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    
  })
  console.log(req.user._id)
  console.log("User",User)


  if (!user) {
    return next(new AppError("USER NOT FOUND", 404))
  }

  res.status(201).json({
    status: "success",
    user
  })

})





exports.getUser = (req, res) => {
  console.log("protected accesed");

  const user = req.user;

  res.json({
    user,
  });
};

exports.getFrontUser = catchAsync(async (token) => {
  console.log("componentmounted", token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get(
      "http://localhost:3000/api/users/cart",
      config
    );
    return data;
  } catch (err) {
    console.log(err);
  }
});
