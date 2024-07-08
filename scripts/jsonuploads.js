// JSON データの例
const jsonData = {
  word: 'apple',
  meaning: 'a fruit',
  examples: ['I like apples.', 'She ate an apple.']
};

// サーバーに送信する設定
fetch('/save_json_data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(jsonData)
})
.then(response => {
  if (response.ok) {
    console.log('JSON データが保存されました。');
  } else {
    console.error('JSON データの保存に失敗しました。');
  }
})
.catch(error => {
  console.error('エラーが発生しました:', error);
});
