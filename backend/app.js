const express = require("express");
const { connectToMongoDb } = require("./db/db");
const app = express();
const cookieParser = require("cookie-parser");
const cores = require("cors");
app.use(express.json());
app.use(cookieParser());
app.use(
  cores({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
const PORT = 3000;
const productRoutes = require("./routes/api/product");
const cartRoutes = require("./routes/api/cart");
const authenticationRoute = require("./routes/api/authentication");
const userVerification = require("./routes/api/userverification");
app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", authenticationRoute);
app.use("/api", userVerification);
connectToMongoDb();
app.listen(PORT, (error) => {
  if (error) console.log("error occured");
  else console.log("Server is Successfully Running, " + PORT);
});
