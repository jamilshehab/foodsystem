/**;the error I am facing is due to the cart model */
const express = require("express");
const { connectToMongoDb } = require("./db/db");

const app = express();
app.use(express.json());
const PORT = 3000;
const productRoutes = require("./routes/api/product");
const cartRoutes = require("./routes/api/cart");
const registerRoutes = require("./routes/api/register");
const loginRoutes = require("./routes/api/login");
app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of Server");
});
app.use("/api", productRoutes);
app.use("/api", cartRoutes);
app.use("/api", registerRoutes);
app.use("/api", loginRoutes);
connectToMongoDb();

app.listen(PORT, (error) => {
  if (error) console.log("error occured");
  else console.log("Server is Successfully Running, " + PORT);
});
