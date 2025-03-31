const { MongoClient } = require("mongodb");

const connectToMongoDb = async () => {
  try {
    const url =
      "mongodb+srv://user1:pUser%401234!34i5@cluster0.cqaqd2u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    await client.connect();
    console.log("connected successfully");
  } catch (error) {
    console.log("connection failed", error);
  }
};
module.exports = { connectToMongoDb };
