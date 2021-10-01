const Post = require('../models/postModel.js');

exports.getAllPosts = async (req, res) => {
  try {
    const post = await Post.find()
    res.status(200).json({
      messge: 'post',
      count: post.length,
      data: {
        post,
      },
    })
  } catch (e) {
    res.status(400).json({
      message: 'fail',
    })
  }
}

exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.status(200).json({
      messge: 'post',
      data: {
        post,
      },
    })
  } catch (e) {
    res.status(400).json({
      message: 'fail',
    })
  }
}

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    res.status(200).json({
      messge: 'post',
      data: {
        post,
      },
    })
  } catch (e) {
    res.status(400).json({
      message: 'fail',
    })
  }
}

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate(req.params.id, req.body)
    res.status(200).json({
      messge: 'post',
      data: {
        post,
      },
    })
  } catch (e) {
    res.status(400).json({
      message: 'fail',
    })
  }
}

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({
      messge: 'post',
    })
  } catch (e) {
    res.status(400).json({
      message: 'fail',
    })
  }
}
