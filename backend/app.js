import { MongoClient } from "mongodb";
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});

app.listen(PORT, (error) => {
  if (!error) console.log("Server is Successfully Running, " + PORT);
  else console.log("Error occurred, server can't start", error);
});

const connectToMongoDb = async () => {
  try {
    const connectionString = process.env.MONGODB_URL || "";
    const client = new MongoClient(connectionString);
    const mongodb = await client.connect();
    console.log("connected successfully", mongodb);
  } catch (error) {
    console.log("connection failed", error);
  }
};
connectToMongoDb();
