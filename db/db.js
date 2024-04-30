const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const DB_NAME = "OAuth";
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
  } catch (error) {
    console.log("Mongodb connection error", error);
    process.exit(1);
  }
};

module.exports = connectDb;
