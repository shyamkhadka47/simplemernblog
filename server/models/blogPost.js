const mongoose = require("mongoose");

const blogPostSchema = mongoose.Schema({
  title: String,
  description: String,
});

const blogPost = mongoose.model("blogpost", blogPostSchema);

module.exports = { blogPost };
