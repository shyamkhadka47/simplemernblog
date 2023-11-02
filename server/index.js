const express = require("express");
const cors = require("cors");
const { connectdb } = require("./connect");
const { blogPost } = require("./models/blogPost");

const port = 5000;

connectdb();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes

app.get("/get-blogs", async (req, res) => {
  const blogs = await blogPost.find();
  if (blogs) {
    res.status(200).send(blogs);
  } else {
    res.status(400).json("no blogs in database");
  }
});

app.get("/get-blogs/:id", async (req, res) => {
  const blogs = await blogPost.findById(req.params.id);
  if (blogs) {
    res.status(200).send(blogs);
  } else {
    res.status(400).json("no such Blogs");
  }
});

app.post("/add-blog", async (req, res) => {
  try {
    const blog = await blogPost({
      title: req.body.title,
      description: req.body.description,
    });
    await blog.save();

    if (!blog) {
      res.status(400).json({ message: "problem posting blog" });
    } else {
      res.status(200).json({ message: "blog posted successfully", blog });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

app.delete("/delete-blog/:id", async (req, res) => {
  const blog = await blogPost.findByIdAndDelete(req.params.id);
  const blogs = await blogPost.find();

  if (!blog) {
    res.status(400).json({ message: "such blog is no available" });
  }

  res.status(200).json(blogs);
});

app.put("/edit-blog/:id", async (req, res) => {
  const blog = await blogPost.findByIdAndUpdate(req.params.id);
  if (!blog) {
    res.status(400).json({ message: "Sorry No Such Blogs" });
  }

  if (!req.body.title && !req.body.description) {
    res.json({ message: "Please enter title or description" });
  } else if (!req.body.title) {
    blog.description = req.body.description;
  } else if (!req.body.description) {
    blog.title = req.body.title;
  } else {
    blog.title = req.body.title;
    blog.description = req.body.description;
  }
  await blog.save();

  const blogs = await blogPost.find();
  res.status(200).json({ message: "Blog Updated Successfully", blogs });
});

//listen to server
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
