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
// dictionary.js

// DOMが読み込まれた後に実行する処理
document.addEventListener('DOMContentLoaded', function() {
  // 辞書の作成ボタンのクリックイベント
  document.getElementById('create-dictionary').addEventListener('click', function() {
    console.log('Create dictionary clicked');
    // 辞書の作成処理を実装する
    // 例: 辞書作成フォームを表示するなど
  });

  // 単語作成ボタンのクリックイベント
  document.getElementById('create-word').addEventListener('click', function() {
    console.log('Create word clicked');
    // 単語作成の処理を実装する
    // 例: 単語作成フォームを表示するなど
  });

  // 例文作成ボタンのクリックイベント
  document.getElementById('create-sentence').addEventListener('click', function() {
    console.log('Create sentence clicked');
    // 例文作成の処理を実装する
    // 例: 例文作成フォームを表示するなど
  });

  // 辞書の単語数と例文数の表示
  const dictionaryStats = {
    wordCount: 500, // 仮の単語数
    sentenceCount: 700 // 仮の例文数
  };

  document.getElementById('word-count').textContent = dictionaryStats.wordCount;
  document.getElementById('sentence-count').textContent = dictionaryStats.sentenceCount;

  // 辞書の単語の文字の割合をグラフで表示（仮のデータ）
  const wordLettersData = {
    vowels: 40,
    consonants: 60
  };

  drawLetterPercentageGraph(wordLettersData);
});

// 辞書の単語の文字の割合をグラフで描画する関数（仮実装）
function drawLetterPercentageGraph(data) {
  const canvas = document.getElementById('letter-graph');
  if (!canvas || !canvas.getContext) {
    console.error('Canvas not supported');
    return;
  }

  const ctx = canvas.getContext('2d');
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  // グラフの描画処理を実装する
  // 例: 円グラフや棒グラフの描画
}
