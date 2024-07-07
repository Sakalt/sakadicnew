// アカウント管理ページのJavaScript (account.js)

// アカウント情報を読み込む関数
function loadAccountInfo() {
    fetch('load_account_info.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('アカウント情報の読み込みに失敗しました');
            }
            return response.json();
        })
        .then(data => {
            displayAccountInfo(data);
        })
        .catch(error => {
            console.error('エラー:', error);
        });
}

// アカウント情報を表示する関数
function displayAccountInfo(account) {
    const accountInfoElement = document.getElementById('account-info');
    accountInfoElement.textContent = `ユーザー名: ${account.username}, メール: ${account.email}`;
}

// ログアウト処理
document.getElementById('logout-button').addEventListener('click', function() {
    fetch('logout.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('ログアウトに失敗しました');
            }
            window.location.href = 'login.html';
        })
        .catch(error => {
            console.error('エラー:', error);
        });
});

// ページ読み込み時にアカウント情報を読み込む
document.addEventListener('DOMContentLoaded', () => {
    loadAccountInfo();
});
