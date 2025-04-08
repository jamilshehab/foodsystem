const express = require("express");
const { UserModel } = require("../../models/User");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userEmail = await UserModel.findOne({ email });
  if (userEmail) {
    res.send({ message: "login sucess" });
  } else {
    res.send({ message: "wrong credentials" });
  }
});

module.exports = router;
