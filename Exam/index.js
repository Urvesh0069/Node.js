import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.route.js";
import blogRoutes from "./routes/blog.route.js";
import commentRoutes from "./routes/comment.routes.js";

dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));

// EJS Path Fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Public
app.use(express.static("public"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/comments", commentRoutes);
app.use("/blogs", blogRoutes);

// UI Routes
app.get("/", (req, res) => res.redirect("/login"));

app.get("/login", (req, res) => res.render("login"));
app.get("/register", (req, res) => res.render("register"));

import Blog from "./models/Blog.models.js";
import Comment from "./models/comment.models.js";

app.get("/blogs", async (req, res) => {
  const blogs = await Blog.find().populate("author", "username");
  res.render("blogs", { blogs });
});

app.get("/blog/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("author", "username");
  const comments = await Comment.find({ blog: req.params.id }).populate("user", "username");
  res.render("blogDetail", { blog, comments });
});

//port
const port = process.env.PORT || 3060;

// Start Server
connectDB();
app.listen(port, () => console.log(`Server running on ${port}`));
