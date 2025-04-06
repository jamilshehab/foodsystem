const express = require("express");
const { UserModel } = require("../../models/User");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  UserModel.findone({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login sucess", user: user });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not register");
    }
  });
});
