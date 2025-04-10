const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});
UserSchema.pre("save", async () => {
  this.password = await bcrypt.hash(this.password, 12);
});
const UserModel = mongoose.model("User", UserSchema);
module.exports = { UserModel };
