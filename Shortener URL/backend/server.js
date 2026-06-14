const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const urlRoutes = require("./routes/urlRoutes");
const { redirectUrl } = require("./controllers/urlController");

// Connect MongoDB
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);

// URL Routes
app.use("/api/url", urlRoutes);

// Test Route
app.get("/check", (req, res) => {
  res.json({
    message: "Check Route Working",
  });
});

// Redirect Short URL
app.get("/:code", redirectUrl);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});