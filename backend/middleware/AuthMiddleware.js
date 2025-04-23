const { UserModel } = require("../models/User");

const userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token; // Retrieve token from cookies
    console.log("Token received from client:", token);

    if (!token) {
      return res
        .status(401)
        .json({ status: false, msg: "Unauthorized: No token provided" });
    }

    jwt.verify(token, process.env.SECRET_TOKEN, async (err, data) => {
      if (err) {
        console.error("JWT verification error:", err.message);
        return res
          .status(403)
          .json({ status: false, msg: "Unauthorized: Invalid token" });
      }

      const user = await UserModel.findById(data.id).catch((err) => {
        console.error("Database error:", err.message);
        return null;
      });
      if (!user) {
        return res.status(404).json({ status: false, msg: "User not found" });
      }

      req.user = user;
      console.log("User verified:", user.firstName);
      next();
    });
  } catch (err) {
    console.error("Error in userVerification middleware:", err.message);
    res.status(500).json({ status: false, msg: "Internal server error" });
  }
};

module.exports = { userVerification };
