const mongoose = require("mongoose");
const validator = require("validator");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "please provide your email"],
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
  passwordResetToken: String
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;

  next();
});

userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto.
    createHash("sha256")
    .update(resetToken)
    .digest("hex");
  
  return resetToken


}

const User = mongoose.model("User", userSchema);
mongoose.models = {};
module.exports = User;
