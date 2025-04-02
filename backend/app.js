const express = require("express");
const { connectToMongoDb } = require("./db/db");

const app = express();
app.use(express.json());
const { ProductModel } = require("./models/Product");
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

connectToMongoDb();
app.post("/foods/products", async (req, res) => {
  const products = req.body; //product will send this data
  if (
    !products.name ||
    !products.price ||
    !products.description ||
    !products.image
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please Provide all fields" });
  }
  const newProduct = new ProductModel(products);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("the error is ", error.message);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, (error) => {
  if (error) console.log("error occured");
  else console.log("Server is Successfully Running, " + PORT);
});
