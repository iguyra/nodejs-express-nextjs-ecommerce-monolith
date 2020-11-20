const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/").get(userController.getAllUsers)


router.patch("/updateme",  authController.protected,userController.updateMe)

router.post("/login", authController.login);
router.post("/signup", authController.signup);
router.get("/cart", authController.protected, userController.getUser);


router.patch("/forgotPassword",authController.forgotPassword)

router.patch("/resetPassword/:token",  authController.resetPassword)
router.patch("/updatePassword/", authController.protected,  authController.updatePassword)

module.exports = router;
