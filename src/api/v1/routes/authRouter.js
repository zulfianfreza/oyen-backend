const express = require("express");
const AuthController = require("../controllers/authController");

const router = express.Router();

// router.get("/cms/auth/signup"); //execute to create admin
router.post("/cms/auth/signin", AuthController.signinAdmin); //signin admin
router.post("/auth/signin", AuthController.signinUser); //signin user
router.post("/auth/signup", AuthController.signupUser); //signup user

module.exports = router;
