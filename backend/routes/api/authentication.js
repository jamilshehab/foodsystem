const express = require("express");
const {
  SignupController,
  SignInController,
} = require("../../controllers/UserAuthentication");
const router = express.Router();
router.post("/register", SignupController);
router.post("/login", SignInController);
module.exports = router;
