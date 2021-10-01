const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    title: {
      type: mongoose.Schema.Types.String,
      required: [true, "Post must have a title"],
    },
    body: {
      type: mongoose.Schema.Types.String,
      required: [true, "Post must have a body"],
    },
  }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post