const express = require("express");
const { getCart, deleteCart, createCart } = require("../../controllers/CartController");
const { userVerification } = require("../../middleware/AuthMiddleware");
const router = express.Router();

router.get("/viewCart", userVerification, getCart);
router.post("/deletecart", userVerification, deleteCart);
router.post("/addToCart", userVerification, createCart);
module.exports = router;
