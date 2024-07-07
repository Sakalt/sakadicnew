// register.js

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.textContent = 'パスワードが一致しません。';
        return;
    }

    fetch('register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('登録が成功しました。ログインページにリダイレクトします。');
            window.location.href = 'login.html';
        } else {
            errorMessage.textContent = data.error || '登録に失敗しました。';
        }
    })
    .catch(error => {
        console.error('エラー:', error);
        errorMessage.textContent = 'エラーが発生しました。';
    });
});
