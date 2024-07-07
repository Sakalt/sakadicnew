// login.js

// ログインフォームの送信イベント
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // デフォルトのフォーム送信をキャンセル

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // ログイン処理を実行する関数を呼び出す
  loginUser(username, password); // ログイン処理を実装する関数が必要
});
