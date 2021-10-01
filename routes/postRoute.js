const express = require('express')
postController = require('../controllers/postController')
router = express.Router()

router.route('/').get(postController.getAllPosts).post(postController.createPost)
router.route('/:id').get(postController.getPostById).patch(postController.updatePost).delete(postController.deletePost)

module.exports = router
