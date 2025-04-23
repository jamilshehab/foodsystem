const { CartModel } = require("../models/Cart");
const createCart = async (req, res) => {
  try {
    const { productId, quantity, price } = req.body;
    const userId = req.user._id;
    console.log("🛒 createCart controller hit!");
    console.log("Received data:", req.body);
    console.log("User ID:", userId);
    if (!productId || !price || !quantity) {
      return res.status(400).json({ msg: "Missing product info" });
    }

    const parsedQuantity = parseInt(quantity);

    let cart = await CartModel.findOne({ userId });

    if (!cart) {
      cart = new CartModel({ userId, items: [], subTotal: 0 });
    }

    const itemIndex = cart.items.findIndex(
      (item) => item.productId.toString() === productId
    );

    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += parsedQuantity;
      cart.items[itemIndex].total = cart.items[itemIndex].quantity * price;
    } else {
      const total = parsedQuantity * price;
      cart.items.push({ productId, quantity: parsedQuantity, price, total });
    }

    cart.subTotal = cart.items.reduce((sum, item) => sum + item.total, 0);

    const savedCart = await cart.save();
    res.status(200).json({ msg: "Cart updated", data: savedCart });
  } catch (err) {
    console.error("Cart error:");
    res.status(500).json({ msg: "Something went wrong", error: err.message });
  }
};
module.exports = { createCart };

const getCart = async (req, res) => {
  const user = req.user._id;
  try {
    const cart = await CartModel.findOne({ user });
    if (!cart) {
      return res.status(404).send({ message: "Cart not found" });
    }
    res.status(200).send({ data: cart });
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).send({ message: "Internal server error" });
  }
};

const deleteCart = async (req, res) => {
  const user = req.user._id;
  const itemId = req.query.itemId;
  try {
    let cart = await CartModel.findOne({ user });
    const itemIndex = cart.items.findIndex((item) => item.itemId == itemId);
    if (itemIndex > -1) {
      let item = cart.items[itemIndex];
      cart.bill -= item.quantity * item.price;
      if (cart.bill < 0) {
        cart.bill = 0;
      }
      cart.items.splice(itemIndex, 1);
      cart.bill = cart.items.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
      }, 0);
      cart = await cart.save();
      res.status(200).send(cart);
    } else {
      res.status(404).send("item not found");
    }
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
};
module.exports = { createCart, getCart, deleteCart };
