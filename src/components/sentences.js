const express = require('express');
const router = express.Router();
const Sentence = require('../models/Sentence');
const cron = require('node-cron');

// 既存のコード...

// 例文を保存するエンドポイント
router.post('/', async (req, res) => {
  const { sentence, translation, tags, font } = req.body;
  const newSentence = new Sentence({ sentence, translation, tags, font });
  await newSentence.save();
  res.status(201).json(newSentence);
});

// 今日の例文を取得するエンドポイント
router.get('/today', async (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const sentence = await Sentence.findOne({ date: today });
  if (!sentence) {
    return res.status(404).send('今日の例文が見つかりません');
  }
  res.json({ sentence: sentence.sentence, font: sentence.font });
});

// 例文生成スケジュール
cron.schedule('0 6 * * *', async () => {
  const sentence = await generateSentenceOfTheDay(); // 例文生成ロジック
  const today = new Date().toISOString().split('T')[0];
  await Sentence.create({ date: today, sentence });
  console.log('今日の例文が生成されました');
});

const generateSentenceOfTheDay = async () => {
  // ここに例文生成ロジックを追加
  return '生成された例文';
};

module.exports = router;
