const { UserModel } = require("../models/User");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    console.log(req.cookies);
    return res.json({ status: false });
  }
  jwt.verify(token, process.env.SECRET_TOKEN, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) return res.json({ status: true, user: user.firstName });
      else return res.json({ status: false });
    }
  });
};
module.exports = { userVerification };
