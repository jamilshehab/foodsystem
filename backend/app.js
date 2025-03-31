require("dotenv").config();
const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});
//connected to mongodb
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
connectToMongoDb();

app.listen(PORT, (error) => {
  if (!error) console.log("Server is Successfully Running, " + PORT);
  else console.log("Error occurred, server can't start", error);
});
