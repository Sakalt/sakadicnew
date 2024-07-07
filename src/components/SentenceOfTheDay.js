// src/components/SentencesOfToDay.js

// 日本語の文法に基づいて今日の例文を生成する関数
function generateSentenceOfTheDay() {
  // 仮の文法に基づいて例文を生成する
  const subjects = ['私', 'あなた', '彼', '彼女'];
  const verbs = ['食べる', '寝る', '行く', '読む'];
  const objects = ['りんご', '本', '映画', '旅行'];
  
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const object = objects[Math.floor(Math.random() * objects.length)];
  
  return `${subject}が${object}を${verb}。`;
}

// DOMが読み込まれた後に実行する処理
document.addEventListener('DOMContentLoaded', function() {
  const sentenceOfTheDay = generateSentenceOfTheDay();
  displaySentence(sentenceOfTheDay);
});

// 生成した例文を表示する関数
function displaySentence(sentence) {
  const sentenceContainer = document.getElementById('sentence-of-the-day');
  if (sentenceContainer) {
    sentenceContainer.textContent = sentence;
  }
}
