const express = require("express");
const { UserModel } = require("../../models/User");
const router = express.Router();

router.post("/api/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    UserModel.findOne({ email: email }),
      (err, user) => {
        if (user) {
          res.send({ message: "user already exists" });
        } else {
          const user = new UserModel({ firstName, lastName, email, password });
          user.save((err) => {
            if (err) {
              res.send(err);
            } else {
              res.send({ message: "sucessfull" });
            }
          });
        }
      };
  } catch (error) {
    console.log("error", error);
  }
});
