const mongoose = require("mongoose");
const connectToMongoDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user1:pUser%401234!34i5@cluster0.cqaqd2u.mongodb.net/foods?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("connected successfully");
  } catch (error) {
    console.log("connection failed", error);
  }
};
module.exports = { connectToMongoDb };
