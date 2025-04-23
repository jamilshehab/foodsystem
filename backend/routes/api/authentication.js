const express = require("express");
const {
  SignupController,
  SignInController,
} = require("../../controllers/UserAuthentication");
const { userVerification } = require("../../middleware/AuthMiddleware");
const router = express.Router();
router.post("/register", SignupController);
router.post("/login", SignInController);
router.post("/verify", userVerification);
module.exports = router;
