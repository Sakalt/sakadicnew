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
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'account.html';
        } else {
            errorMessage.textContent = data.error || 'ログインに失敗しました。';
        }
    })
    .catch(error => {
        console.error('エラー:', error);
        errorMessage.textContent = 'エラーが発生しました。';
    });
});
