const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: String,
  translation: String,
  examples: [String],
  relatedWords: [String],
  image: String,
});

module.exports = mongoose.model('Word', wordSchema);
