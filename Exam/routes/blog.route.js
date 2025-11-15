import express from "express";
import { createBlog, getBlogs, getBlog, updateBlog, deleteBlog } from "../controllers/blog.controllers.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getBlogs);
router.get("/:id", getBlog);
router.post("/", auth, createBlog);
router.put("/:id", auth, updateBlog);
router.delete("/:id", auth, deleteBlog);

export default router;
