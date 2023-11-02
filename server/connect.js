const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://aashwinikumar9:test123@cluster0.5fbnzye.mongodb.net/blog?retryWrites=true&w=majority";

connectdb = async () => {
  const connection = await mongoose.connect(mongoURL);

  if (connection) {
    console.log("Database connected");
  } else {
    console.log("Something went wrong");
  }
};

module.exports = { connectdb };
