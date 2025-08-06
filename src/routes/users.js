const express = require('express');
const router = express.Router();
const {users} = require('../data/memoryDB');

router.post('/', (req, res) => {
  const newUser = req.body;

  if (
    !newUser.id ||
    !newUser.firstname ||
    !newUser.secondname ||
    !newUser.password
  ) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  users.push(newUser);
  res.status(201).json({ message: 'User created successfully', user: newUser });
});

module.exports = router;