const express = require('express');
const { likePost, unlikePost } = require('../controllers/like.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/:postId', authMiddleware, likePost);
router.delete('/:postId', authMiddleware, unlikePost);

module.exports = router;
