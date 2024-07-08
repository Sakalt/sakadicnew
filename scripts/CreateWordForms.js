document.addEventListener('DOMContentLoaded', function() {
    const createWordForm = document.getElementById('create-word-form');
    const createSentenceForm = document.getElementById('create-sentence-form');
    const dictionarySelect = document.getElementById('dictionary-select');
    const otmFileInput = document.getElementById('otm-file-input');
    const fontFileInput = document.getElementById('font-file-input');
    
    function loadUserDictionaries() {
        const dictionaries = JSON.parse(localStorage.getItem('dictionaries')) || [];
        dictionaries.forEach(dictionary => {
            const option = document.createElement('option');
            option.value = dictionary.id;
            option.text = dictionary.name;
            dictionarySelect.appendChild(option);
        });
    }

    createWordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const word = document.getElementById('word').value;
        const pronunciation = document.getElementById('pronunciation').value;
        const meaning = document.getElementById('meaning').value;
        const variations = document.getElementById('variations').value.split(',');
        const dictionaryId = dictionarySelect.value;
        if (word && dictionaryId) {
            addWordToDictionary(dictionaryId, { word, pronunciation, meaning, variations });
        }
    });

    createSentenceForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const sentence = document.getElementById('sentence').value;
        const dictionaryId = dictionarySelect.value;
        if (sentence && dictionaryId) {
            addSentenceToDictionary(dictionaryId, sentence);
        }
    });

    otmFileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const otmData = JSON.parse(e.target.result);
                loadOtmDataToDictionary(dictionarySelect.value, otmData);
            };
            reader.readAsText(file);
        }
    });

    fontFileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                saveFontToDictionary(dictionarySelect.value, e.target.result);
            };
            reader.readAsDataURL(file);
        }
    });

    function addWordToDictionary(dictionaryId, wordData) {
        fetch(`dictionaries/${dictionaryId}.json`)
            .then(response => response.json())
            .then(data => {
                data.words = data.words || [];
                data.words.push(wordData);
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
            })
            .catch(error => console.error('Error:', error));
    }

    function addSentenceToDictionary(dictionaryId, sentence) {
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
            })
            .catch(error => console.error('Error:', error));
    }

    function loadOtmDataToDictionary(dictionaryId, otmData) {
        fetch(`dictionaries/${dictionaryId}.json`)
            .then(response => response.json())
            .then(data => {
                data.words = data.words || [];
                data.sentences = data.sentences || [];
                data.words.push(...otmData.words);
                data.sentences.push(...otmData.sentences);
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
                alert('OTMデータが読み込まれました');
            })
            .catch(error => console.error('Error:', error));
    }

    function saveFontToDictionary(dictionaryId, fontData) {
        fetch(`dictionaries/${dictionaryId}.json`)
            .then(response => response.json())
            .then(data => {
                data.font = fontData;
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
                alert('フォントが保存されました');
            })
            .catch(error => console.error('Error:', error));
    }

    loadUserDictionaries();
});
