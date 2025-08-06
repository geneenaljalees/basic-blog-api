const express = require('express');
const router = express.Router();
const { users, posts } = require('../data/memoryDB');

router.post('/', (req, res) => {
  const newPost = req.body;

  if (!newPost.userId || !newPost.title || !newPost.content) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const userExists = users.find((u) => u.id === newPost.userId);
  if (!userExists) {
    return res.status(404).json({ error: 'User not found' });
  }

  posts.push(newPost);
  res.status(201).json({ message: 'Post created successfully', post: newPost });
});


module.exports = router;