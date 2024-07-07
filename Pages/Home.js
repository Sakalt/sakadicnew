// home.js

// DOMが読み込まれた後に実行する処理
document.addEventListener('DOMContentLoaded', function() {
  // ホームページの初期化などの処理をここに記述

  // 例文の生成
  const sentenceOfTheDay = generateSentence();
  displaySentence(sentenceOfTheDay);
});

// 例文を生成する関数（仮実装）
function generateSentence() {
  const words = ['私', 'は', '子供', 'の', '保護', '者', 'です', '天才'];
  return words.join(' ') + '。';
}

// 例文を表示する関数
function displaySentence(sentence) {
  const sentenceContainer = document.getElementById('sentence-of-the-day');
  if (sentenceContainer) {
    sentenceContainer.textContent = sentence;
  }
}
