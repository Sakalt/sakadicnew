const express = require('express');
const router = express.Router();
const Dictionary = require('../models/Dictionary');
const multer = require('multer');
const upload = multer();

// OTM-jsonエクスポート
router.get('/export', async (req, res) => {
  const dictionaries = await Dictionary.find();
  res.json(dictionaries);
});

// OTM-jsonインポート
router.post('/import', upload.single('file'), async (req, res) => {
  const data = JSON.parse(req.file.buffer.toString());
  await Dictionary.insertMany(data);
  res.status(201).json({ message: '辞書がインポートされました' });
});

module.exports = router;
