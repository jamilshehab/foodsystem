const express = require("express");
const { userVerification } = require("../../middleware/AuthMiddleware");
const router = express.Router();

router.post("/", userVerification);

module.exports = router;
