const express = require("express");
const router = express.Router();
const ProductModel = require("../../models/Product");

router.get("/api/foods", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error has found", error);
  }
});
module.exports = router;
