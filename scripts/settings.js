// settings.js

document.getElementById('settings-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const dictionaryName = document.getElementById('dictionary-name').value;
    const dictionaryDescription = document.getElementById('dictionary-description').value;
    const fontSelect = document.getElementById('font-select').value;
    const otmJsonFile = document.getElementById('otm-json').files[0];
    const errorMessage = document.getElementById('error-message');

    const formData = new FormData();
    formData.append('dictionaryName', dictionaryName);
    formData.append('dictionaryDescription', dictionaryDescription);
    formData.append('fontSelect', fontSelect);
    if (otmJsonFile) {
        formData.append('otmJsonFile', otmJsonFile);
    }

    fetch('save_settings.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('設定が保存されました。');
        } else {
            errorMessage.textContent = data.error || '設定の保存に失敗しました。';
        }
    })
    .catch(error => {
        console.error('エラー:', error);
        errorMessage.textContent = 'エラーが発生しました。';
    });
});
