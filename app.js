const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
const app = express();

const dbURI =
  "mongodb+srv://jam19:898787@cluster0.2c0b5.mongodb.net/node-tuts?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(3000);
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

// register view engine
app.set("view engine", "ejs");

// middle ware and static files
app.use(express.static("public"));
// if we don't name our html files folder 'views'
//app.set("views", "folder_name_here");

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Blog 2",
    snippet: "Something",
    body: "something more",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/all-blog", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("5fdcb1b10cad5c2110a2379c")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// handling requests using view engine
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// 404
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
