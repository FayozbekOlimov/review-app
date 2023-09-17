require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/dbConn");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3500;
const uploadImage = require("././config/cloudinary");

connectDB();

const app = express();
app.use(express.json({ limit: "25mb" }));
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/reviews", require("./routes/reviews"));

app.post("/uploadImage", (req, res) => {
  uploadImage(req.body.image)
    .then((url) => res.send(url))
    .catch((err) => res.status(500).send(err));
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
