const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: 'string',
      required: true,
    },
    snippet: {
      type: 'string',
      required: true,
    },
    content: {
      type: 'string',
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
