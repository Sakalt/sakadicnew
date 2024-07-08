// scripts/autoCreateAccount.js

// ローカルストレージでユーザーを確認
function checkAndCreateUser() {
    let user = localStorage.getItem('user');

    if (!user) {
        // ユーザーが存在しない場合、新しいユーザーを作成
        user = createUser();
        localStorage.setItem('user', JSON.stringify(user));
        console.log('新しいユーザーが作成されました:', user);
    } else {
        // ユーザーが存在する場合、既存のユーザーを使用
        user = JSON.parse(user);
        console.log('既存のユーザーが見つかりました:', user);
    }

    return user;
}

// 新しいユーザーを作成する関数
function createUser() {
    const userId = generateUserId();
    const user = {
        id: userId,
        createdDate: new Date().toISOString(),
        dictionaries: []
    };
    return user;
}

// ユーザーIDを生成する関数 (簡易な例)
function generateUserId() {
    return 'user-' + Math.random().toString(36).substr(2, 9);
}

// ページ読み込み時にユーザーを確認して作成
window.onload = function() {
    checkAndCreateUser();
};
