const express = require('express');
const { createPost, getPosts, deletePost } = require('../controllers/post.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', getPosts);
router.delete('/:id', authMiddleware, deletePost);

module.exports = router;
