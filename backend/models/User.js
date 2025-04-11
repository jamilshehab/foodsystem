const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Your first name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Your last name is required"],
  },
  email: {
    type: String,
    required: [true, "Your email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
UserSchema.pre("save", async () => {
  this.password = await bcrypt.hash(this.password, 12);
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = { UserModel };
