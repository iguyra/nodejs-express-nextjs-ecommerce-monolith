const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please tell us your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provie a valid email"],
  },
  photo: String,

  password: {
    type: String,
    required: [true, "please provie password"],
    minlength: 8,
    select: false, // to not show up in any output
  },

  passwordConfirm: {
    type: String,
    required: [true, "please confirm your password"],
    validate: {
      //this only works on CREATE N SAVE!!
      validator: function (el) {
        return el === this.password; // el is the passwordConfirm eg: abc === abc will return true
      },
      message: "passwords are not the same",
    },
  },
});

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);
mongoose.models = {};
module.exports = User;
