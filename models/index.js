const sequelize = require('../config/database');
const User = require('./user.model')(sequelize);
const Post = require('./post.model')(sequelize);
const Comment = require('./comment.model')(sequelize);
const Like = require('./like.model')(sequelize);

// Associations
User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);
User.hasMany(Comment);
Comment.belongsTo(User);

Post.hasMany(Like);
Like.belongsTo(Post);
User.hasMany(Like);
Like.belongsTo(User);

module.exports = { sequelize, User, Post, Comment, Like };
