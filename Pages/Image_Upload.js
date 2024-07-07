// image_upload.js

// 画像ファイルが選択されたときの処理
document.getElementById('image-file').addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  // ここで画像のバリデーションやアップロード処理を行う
  console.log('Selected file:', file.name);

  // 仮で選択した画像を表示する処理（必要に応じて実装）
  const reader = new FileReader();
  reader.onload = function() {
    const imgElement = document.createElement('img');
    imgElement.src = reader.result;
    document.getElementById('image-preview').appendChild(imgElement);
  };
  reader.readAsDataURL(file);
});
