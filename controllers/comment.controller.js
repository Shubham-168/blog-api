const { Comment } = require('../models');

exports.addComment = async (req, res) => {
  const comment = await Comment.create({ content: req.body.content, UserId: req.user.id, PostId: req.params.postId });
  res.json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.findAll({ where: { PostId: req.params.postId } });
  res.json(comments);
};
