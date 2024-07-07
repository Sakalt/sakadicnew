// アカウントページのJavaScript (account.js)

// ユーザーのログイン状態を確認する関数
function checkLoginStatus() {
    fetch('check_login.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('ログイン状態の確認に失敗しました');
            }
            return response.json();
        })
        .then(data => {
            if (data.loggedIn) {
                document.getElementById('login-prompt').style.display = 'none';
                document.getElementById('account-info').style.display = 'block';
                document.getElementById('username').textContent = data.username;
                loadDictionaries(data.userId);
            } else {
                document.getElementById('login-prompt').style.display = 'block';
                document.getElementById('account-info').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('エラー:', error);
        });
}

// ユーザーの辞書を読み込む関数
function loadDictionaries(userId) {
    fetch(`load_dictionaries.php?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('辞書の読み込みに失敗しました');
            }
            return response.json();
        })
        .then(data => {
            const dictionaryListElement = document.getElementById('dictionary-list');
            dictionaryListElement.innerHTML = ''; // リストをクリア

            data.dictionaries.forEach(dictionary => {
                const li = document.createElement('li');
                li.textContent = dictionary.name;
                dictionaryListElement.appendChild(li);
            });

            // 辞書が10個未満の場合、辞書作成ボタンを表示
            if (data.dictionaries.length < 10) {
                document.getElementById('create-dictionary-button').style.display = 'block';
                document.getElementById('create-dictionary-button').addEventListener('click', () => createDictionary(userId));
            } else {
                document.getElementById('create-dictionary-button').style.display = 'none';
            }
        })
        .catch(error => {
            console.error('エラー:', error);
        });
}

// 辞書を作成する関数
function createDictionary(userId) {
    const dictionaryName = prompt('辞書の名前を入力してください:');

    if (dictionaryName) {
        fetch('create_dictionary.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, dictionaryName })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('辞書の作成に失敗しました');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                alert('辞書が作成されました');
                loadDictionaries(userId); // 辞書一覧を更新
            } else {
                alert('辞書の作成に失敗しました');
            }
        })
        .catch(error => {
            console.error('エラー:', error);
        });
    }
}

// ページ読み込み時にログイン状態を確認
document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
});
