const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const sendEmail = require("../utils/email");
const crypto = require("crypto");

const signToken = (id) => {
  return jwt.sign({id:id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN})
}

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id)
  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true
  }
  res.cookie("jwt", token, cookieOptions)
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user
    }
  })
}


exports.signup = catchAsync(async (req, res, next) => {
 
    const { email, password, passwordConfirm } = req.body;
    const newUser = await User.create({
      email,
      password,
      passwordConfirm,
    });

    createSendToken(newUser, 202, res)
  
});

exports.login = catchAsync(async (req, res, next) => {
 
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!email || !password) {
      const message = "please type credientials";
      return next(new AppError(message, 400))
    }

    if (!user || !(await user.correctPassword(password, user.password))) {
      const message = "user does not exist pls try again";
      return next(new AppError(message, 400))
    }

    console.log("account found");
    createSendToken(user, 201, res)

  
});

exports.protected = catchAsync(async (req, res, next) => {

  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("YOU ARE NOT AUTHORIZED TO ACCESS THIS RESOURCE"))
  }

  console.log(token)

  const verifiedToken = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET
  );

  if(!verifiedToken) next(new AppError("token is not verified"))

  const currentUser = await User.findById(verifiedToken.id);


  req.user = currentUser;
  next();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1 get user based on posted paswword
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError("user not found", 404))
  }


  // 2 generate the random reset token
  const resetToken = user.createPasswordResetToken()
  await user.save({ validateBeforeSave: false })
  console.log("resetToken",resetToken)



 

  // sent it to users email
  const ResetUrl = `${req.protocol}://${req.get("host")}/api/user/resetpassword/${resetToken}`

  const message = `click ${ResetUrl} to reset your password`

  await sendEmail({
    email: user.email,
    subject: "your password reset token",
    message: message
  })

  res.status(200).json({
    status: "success",
    message: "token sent to email"
  })
})


exports.resetPassword = catchAsync(async(req, res, next) => {
   // 1 check token to make sure it has not expire
  const resetToken = crypto.createHash("sha256").update(req.params.token).digest("hex")

  
  // 2 get user from the token
  const user = await User.findOne({ passwordResetToken: resetToken })
  
  if (!user) next(new AppError("token is invalid or has expired", 400))
  
  // 3 update user password
  const { newPassword, newPasswordConfirm } = req.body
  if(newPassword !== newPasswordConfirm) return next(new AppError("please match your password", 202))

  user.password = newPassword
  user.passwordConfirm = newPasswordConfirm
  user.passwordResetToken = undefined
  await user.save({ validateBeforeSave: true })
  

  createSendToken(user, 200, res)
  console.log(user)

  
})

exports.updatePassword = catchAsync(async (req, res, next) => {
  // get user from collection
  const user = await User.findOne({email:req.user.email}).select("+password")


  //check if posted password is same as current password
   const correctPassword = await user.correctPassword(req.body.currentPassword,user.password)

  if(!correctPassword) next(new AppError("current password incorrect, try again", 404))
 // change password and send to user
  user.password = req.body.password
  user.passwordConfirm = req.body.passwordConfirm
  await user.save()
  createSendToken(user, 201, res)
})