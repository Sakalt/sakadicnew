const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/settings', async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.verify(token, config.jwtSecret);
  const user = await User.findById(decoded.id);

  user.font = req.body.font;
  user.permissions = req.body.permissions;
  await user.save();

  res.status(200).send('Settings updated');
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const newUser = new User({ email, password });
  await newUser.save();
  res.status(201).send('User registered');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.password !== password) {
    return res.status(401).send('Invalid credentials');
  }

  const token = jwt.sign({ id: user._id }, config.jwtSecret, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
