// アカウント登録ページのJavaScript (register.js)

document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('register_user.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('アカウント登録に失敗しました');
        }
        return response.text();
    })
    .then(data => {
        alert('アカウント登録が成功しました');
        window.location.href = 'login.html';
    })
    .catch(error => {
        console.error('エラー:', error);
        alert('アカウント登録に失敗しました');
    });
});
