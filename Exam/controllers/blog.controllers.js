import Blog from "../models/Blog.models.js";

export const createBlog = async (req, res) => {
  const { title, content, author } = req.body;

  await Blog.create({ title, content, author });

  res.redirect("/blogs");
};
