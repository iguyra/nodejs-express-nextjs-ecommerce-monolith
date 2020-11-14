const express = require("express");
const fAuthcontroller = require("../fauthContoller");
const router = express.Router();

router.post("/login", fAuthcontroller.login);
router.post("/signup", fAuthcontroller.signup);
router.get("/cart", fAuthcontroller.protected, fAuthcontroller.getUser);

module.exports = router;
