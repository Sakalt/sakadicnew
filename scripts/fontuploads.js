const fileInput = document.getElementById('font-input');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('fontFile', file);

  fetch('/upload_font', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      console.log('フォントがアップロードされました。');
    } else {
      console.error('フォントのアップロードに失敗しました。');
    }
  })
  .catch(error => {
    console.error('エラーが発生しました:', error);
  });
});
