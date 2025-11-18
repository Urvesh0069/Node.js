import Comment from "../models/comment.models.js";

export const addComment = async (req, res) => {
  const { text } = req.body;

  await Comment.create({
    text,
    blog: req.params.id,
    user: req.body.user
  });

  res.redirect(`/blog/${req.params.id}`);
};
