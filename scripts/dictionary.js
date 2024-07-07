// 辞書ページのJavaScript (dictionary.js)

// URLパラメータから辞書IDを取得
const urlParams = new URLSearchParams(window.location.search);
const dictionaryId = urlParams.get('id') || 1; // デフォルトで1

// DOM要素
const wordListElement = document.getElementById('word-list');
const dictionaryTitleElement = document.getElementById('dictionary-title');

// 辞書データをJSONから読み込む関数
function loadDictionaryData() {
    fetch(`load_dictionary.php?dictionaryId=${dictionaryId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('辞書データの読み込みに失敗しました');
            }
            return response.json();
        })
        .then(data => {
            // 辞書データを表示する
            dictionaryTitleElement.textContent = `辞書 ${dictionaryId}`;
            displayWords(data.words);
        })
        .catch(error => {
            console.error('エラー:', error);
        });
}

// 単語データを表示する関数
function displayWords(words) {
    wordListElement.innerHTML = ''; // リストをクリア

    words.forEach(word => {
        const li = document.createElement('li');
        li.textContent = `${word.word}: ${word.meaning}`;
        wordListElement.appendChild(li);
    });
}

// ページ読み込み時に辞書データを読み込む
document.addEventListener('DOMContentLoaded', () => {
    loadDictionaryData();
});
