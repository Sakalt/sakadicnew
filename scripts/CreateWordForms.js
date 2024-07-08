document.addEventListener('DOMContentLoaded', function() {
    const createWordForm = document.getElementById('create-word-form');
    const createSentenceForm = document.getElementById('create-sentence-form');
    const dictionarySelect = document.getElementById('dictionary-select');

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
        const dictionaryId = dictionarySelect.value;
        if (word && dictionaryId) {
            addWordToDictionary(dictionaryId, word);
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

    function addWordToDictionary(dictionaryId, word) {
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

    loadUserDictionaries();
});
