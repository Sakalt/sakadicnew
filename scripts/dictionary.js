document.addEventListener('DOMContentLoaded', function() {
    const dictionaryNameElement = document.getElementById('dictionary-name');
    const dictionaryContent = document.getElementById('dictionary-content');
    const createWordBtn = document.getElementById('create-word-btn');
    const createSentenceBtn = document.getElementById('create-sentence-btn');

    function getDictionaryIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('dictionaryId');
    }

    function loadDictionary() {
        const dictionaryId = getDictionaryIdFromURL();
        const dictionaries = JSON.parse(localStorage.getItem('dictionaries')) || [];
        const dictionary = dictionaries.find(dict => dict.id == dictionaryId);

        if (dictionary) {
            dictionaryNameElement.innerText = dictionary.name;
            // 辞書データを表示
            fetch(`dictionaries/${dictionaryId}.json`)
                .then(response => response.json())
                .then(data => {
                    dictionaryContent.innerText = JSON.stringify(data, null, 2);
                })
                .catch(error => console.error('Error:', error));
        } else {
            dictionaryNameElement.innerText = '辞書が見つかりません';
        }
    }

    createWordBtn.addEventListener('click', function() {
        // 単語作成処理
        const word = prompt('単語を入力してください:');
        if (word) {
            const dictionaryId = getDictionaryIdFromURL();
            // 辞書データに単語を追加
            fetch(`dictionaries/${dictionaryId}.json`)
                .then(response => response.json())
                .then(data => {
                    data.words = data.words || [];
                    data.words.push({ word });
                    return data;
                })
                .then(updatedData => {
                    return fetch(`dictionaries/${dictionaryId}.json`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedData)
                    });
                })
                .then(() => {
                    alert('単語が追加されました');
                    loadDictionary();
                })
                .catch(error => console.error('Error:', error));
        }
    });

    createSentenceBtn.addEventListener('click', function() {
        // 例文作成処理
        const sentence = prompt('例文を入力してください:');
        if (sentence) {
            const dictionaryId = getDictionaryIdFromURL();
            // 辞書データに例文を追加
            fetch(`dictionaries/${dictionaryId}.json`)
                .then(response => response.json())
                .then(data => {
                    data.sentences = data.sentences || [];
                    data.sentences.push({ sentence });
                    return data;
                })
                .then(updatedData => {
                    return fetch(`dictionaries/${dictionaryId}.json`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedData)
                    });
                })
                .then(() => {
                    alert('例文が追加されました');
                    loadDictionary();
                })
                .catch(error => console.error('Error:', error));
        }
    });

    loadDictionary();
});
