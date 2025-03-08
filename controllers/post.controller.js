const { Post } = require('../models');

exports.createPost = async (req, res) => {
  const { title, content, tags } = req.body;
  const post = await Post.create({ title, content, tags, UserId: req.user.id });
  res.json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.findAll({ include: 'User' });
  res.json(posts);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post || post.UserId !== req.user.id) return res.status(403).json({ message: 'Forbidden' });
  await post.destroy();
  res.json({ message: 'Post deleted' });
};
