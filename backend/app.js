const express = require("express");
const { connectToMongoDb } = require("./db/db");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});
//connected to mongodb
connectToMongoDb();

app.listen(PORT, (error) => {
  if (!error) console.log("Server is Successfully Running, " + PORT);
  else console.log("Error occurred, server can't start", error);
});
