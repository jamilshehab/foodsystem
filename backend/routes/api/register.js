const express = require("express");
const { UserModel } = require("../../models/User");
const router = express.Router();
router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      res.send({ message: "user already exists" });
    } else {
      const newUser = new UserModel({ firstName, lastName, email, password });
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false,
      });
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user });
      next();
    }
  } catch (error) {
    console.log(error.message);
    res.send({ message: "error occurred" });
  }
});
module.exports = router;
