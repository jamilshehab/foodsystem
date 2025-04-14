require("dotenv").config();
const jwt = require("jsonwebtoken");
const createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_TOKEN, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
module.exports = { createSecretToken };
