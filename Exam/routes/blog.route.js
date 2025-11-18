import express from "express";
import Blog from "../models/Blog.models.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Show create blog form
router.get("/create", authMiddleware, (req, res) => {
  res.render("create-blog");
});

// Handle blog creation
router.post("/create", authMiddleware, async (req, res) => {
  try {
    const { title, content } = req.body;

    await Blog.create({
      title,
      content,
      user: req.user._id,
    });

    res.redirect("/blogs");
  } catch (err) {
    res.send(err);
  }
});

export default router;
