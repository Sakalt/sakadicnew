const express = require('express');
const router = express.Router();
const Sentence = require('../models/Sentence');

router.get('/today', async (req, res) => {
  const sentence = await Sentence.findOne({ date: new Date().toISOString().split('T')[0] });
  if (!sentence) {
    return res.status(404).send('No sentence for today');
  }
  res.json({ sentence: sentence.text });
});

module.exports = router;
