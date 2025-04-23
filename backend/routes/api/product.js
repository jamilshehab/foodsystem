const express = require("express");
const { viewProduct } = require("../../controllers/ViewProductController");
const router = express.Router();

router.get("/foods", viewProduct);
module.exports = router;
