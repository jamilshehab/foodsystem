const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ItemSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity can not be less than 1."],
    },
    price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const CartSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    items: [ItemSchema],
    subTotal: {
      default: 0,
      type: Number,
    },
  },
  { timestamps: true }
);

// ✅ Properly export both if needed later
const CartModel = mongoose.model("Cart", CartSchema);
module.exports = {
  CartModel,
  ItemSchema, // Optional export if you need it elsewhere
};
