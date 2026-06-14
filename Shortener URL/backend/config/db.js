const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Trying MongoDB...");
    console.log("URI =", process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("MONGO ERROR:");
    console.error(error);
  }
};

module.exports = connectDB;