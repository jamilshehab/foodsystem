const { ProductModel } = require("../models/Product");
const viewProduct = async (req, res) => {
  try {
    // Await the result of the find operation
    const products = await ProductModel.find({});

    // Send the response with the actual data
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("error has found", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
module.exports = { viewProduct };
