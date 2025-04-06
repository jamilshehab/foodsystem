const express = require("express");
const router = express.Router();
const CartModel = require("../../models/Cart");
console.log(CartModel);
router.post("/api/add", async (req, res) => {
  try {
    const product = req.body.products;
    
    const cartDoc = await cart.save();
    res.status(200).json({
      success: true,
      cartId: cartDoc.id,
    });
  } catch (error) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

module.exports = router;
