const dotenv = require("dotenv");
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb Connected....");
  } catch {
    console.log("error");
  }
};

module.exports = { connectDB };
