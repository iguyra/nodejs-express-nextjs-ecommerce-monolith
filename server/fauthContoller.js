const axios = require("axios");
const User = require("./models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.signup = async (req, res, next) => {
  try {
    const { email, password, passwordConfirm } = req.body;
    const newUser = await User.create({
      email,
      password,
      passwordConfirm,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const cookieOptions = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      // secure: true,
      httpOnly: true, //converted to milliseconds
    };

    res.cookie("jwt", token, cookieOptions);
    console.log("account created");
    res.status(201).json({
      status: "success",
      token: token,
      data: {
        newUser,
      },
    });
  } catch (err) {
    console.log("errrorr", err);
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");

    if (!email || !password) {
      return console.log("please type credientials");
    }

    if (!user || !(await user.correctPassword(password, user.password))) {
      return console.log("user does not exist, try again");
    }

    console.log("account found");
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const cookieOptions = {
      expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
      // secure: true,
      httpOnly: true, //converted to milliseconds
    };

    res.cookie("jwt", token, cookieOptions);

    res.status(201).json({
      status: "success",
      token: token,
      data: {
        user,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

exports.protected = async (req, res, next) => {
  const user = {
    name: "res",
  };

  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  const verifiedToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const currentUser = await User.findById(verifiedToken.id);

  console.log("req.headers.authorization", req.headers.authorization, "verifiedToken", currentUser);

  req.user = currentUser;
  next();
};

exports.getUser = (req, res) => {
  console.log("protected accesed");

  const user = req.user;

  res.json({
    user,
  });
};

exports.getFrontUser = async (token) => {
  console.log("componentmounted", token);
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const { data } = await axios.get("http://localhost:3000/api/users/cart", config);
    return data;
  } catch (err) {
    console.log(err);
  }
};
