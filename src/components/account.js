// account.js

// DOMが読み込まれた後に実行する処理
document.addEventListener('DOMContentLoaded', function() {
  // アカウント情報の表示と編集処理を実装する
  // 例: ユーザー名、メールアドレスなどの表示と編集フォームを表示

  // パスワード変更ボタンのクリックイベント
  document.getElementById('change-password').addEventListener('click', function() {
    console.log('Change password clicked');
    // パスワード変更フォームを表示する処理を実装する
  });

  // 2段階認証の設定ボタンのクリックイベント
  document.getElementById('enable-2fa').addEventListener('click', function() {
    console.log('Enable 2FA clicked');
    // 2段階認証の設定フォームを表示する処理を実装する
  });

  // 2段階認証の解除ボタンのクリックイベント
  document.getElementById('disable-2fa').addEventListener('click', function() {
    console.log('Disable 2FA clicked');
    // 2段階認証の解除処理を実装する
  });
});
