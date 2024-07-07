// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'account.html';
        } else {
            errorMessage.textContent = data.error || 'ログインに失敗しました。';
        }
    });
document.addEventListener('DOMContentLoaded', function() {
    // ここにDOM要素へのアクセスやイベントリスナーの設定を記述する
});
const emailInput = document.getElementById('email');
if (emailInput) {
    const emailValue = emailInput.value; // emailInputがnullでないことを確認してからプロパティにアクセスする
} else {
    console.error('IDがemailの要素が見つかりません。');
}
// Login.js の該当部分のコード例
const emailInput = document.getElementById('email');
const emailValue = emailInput.value; // ここでエラーが発生している場合

console.log(emailInput); // emailInputがnullであるかを確認する
