const { Like } = require('../models');

exports.likePost = async (req, res) => {
  await Like.create({ UserId: req.user.id, PostId: req.params.postId });
  res.json({ message: 'Liked' });
};

exports.unlikePost = async (req, res) => {
  await Like.destroy({ where: { UserId: req.user.id, PostId: req.params.postId } });
  res.json({ message: 'Unliked' });
};
