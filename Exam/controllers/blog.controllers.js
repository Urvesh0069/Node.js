import Blog from "../models/Blog.models.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    const blog = new Blog({
      title,
      content,
      author: req.userId,
    });

    await blog.save();
    res.status(201).json({ message: "Blog created", blog });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "username email")
      .sort({ createdAt: -1 });

    res.json(blogs);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "username email");
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    res.json(blog);
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: "Blog not found" });
    if (blog.author.toString() !== req.userId)
      return res.status(403).json({ message: "Unauthorized" });

    blog.title = req.body.title ?? blog.title;
    blog.content = req.body.content ?? blog.content;

    await blog.save();

    res.json({ message: "Blog updated", blog });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: "Blog not found" });
    if (blog.author.toString() !== req.userId)
      return res.status(403).json({ message: "Unauthorized" });

    await blog.deleteOne();

    res.json({ message: "Blog deleted" });
  } catch (e) {
    res.status(500).json({ message: "Server error" });
  }
};
