document.addEventListener('DOMContentLoaded', function() {
    const dictionaryButtonsContainer = document.getElementById('dictionary-buttons');
    const createDictionaryBtn = document.getElementById('create-dictionary-btn');
    const accountInfo = document.getElementById('account-info');

    // アカウント情報を表示
    function loadAccountInfo() {
        const accountData = JSON.parse(localStorage.getItem('accountData'));
        if (accountData) {
            accountInfo.innerText = `ようこそ、${accountData.username}さん`;
        } else {
            accountInfo.innerHTML = '<a href="login.html">ログイン</a>';
        }
    }

    // 辞書作成ボタンをクリックしたときの処理
    createDictionaryBtn.addEventListener('click', function() {
        const dictionaryName = prompt('辞書の名前を入力してください:');
        if (dictionaryName) {
            const dictionaries = JSON.parse(localStorage.getItem('dictionaries')) || [];
            const dictionaryId = dictionaries.length + 1;
            dictionaries.push({ id: dictionaryId, name: dictionaryName });
            localStorage.setItem('dictionaries', JSON.stringify(dictionaries));
            addDictionaryButton(dictionaryId, dictionaryName);
        }
    });

    // 辞書ボタンを追加
    function addDictionaryButton(id, name) {
        const dictionaryBtn = document.createElement('button');
        dictionaryBtn.innerText = name;
        dictionaryBtn.addEventListener('click', function() {
            window.location.href = `dictionary.html?dictionaryId=${id}`;
        });
        dictionaryButtonsContainer.appendChild(dictionaryBtn);
    }

    // 保存された辞書を読み込み、ボタンを表示
    function loadDictionaries() {
        const dictionaries = JSON.parse(localStorage.getItem('dictionaries')) || [];
        dictionaries.forEach(dictionary => {
            addDictionaryButton(dictionary.id, dictionary.name);
        });
    }

    loadAccountInfo();
    loadDictionaries();
});
