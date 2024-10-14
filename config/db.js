const mongoose = require("mongoose");

const connect = async () => {
  try {
    const {
      connection: { readyState },
    } = await mongoose.connect("mongodb://localhost:27017/notes_db");

    if (readyState === 1) {
      console.log("Connection established successfully...");
    }
  } catch (error) {
    console.log("Connection not established", error);
  }
};

module.exports = { connect };
