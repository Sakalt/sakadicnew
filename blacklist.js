// ブラックリストの管理と検証を行うサービスの例

// 仮のブラックリストデータ
let blacklist = [
  { type: 'email', value: 'baduser@example.com' },
  { type: 'ip', value: '192.168.0.1' },
  { type: 'username', value: 'admin' }
];

// ブラックリストに追加する関数
function addToBlacklist(type, value) {
  blacklist.push({ type, value });
}

// ブラックリストから削除する関数
function removeFromBlacklist(type, value) {
  blacklist = blacklist.filter(item => !(item.type === type && item.value === value));
}

// ブラックリストを検証する関数
function checkBlacklist(type, value) {
  return blacklist.some(item => item.type === type && item.value === value);
}

// 使用例
addToBlacklist('email', 'spam@example.com');
console.log(blacklist);

removeFromBlacklist('email', 'baduser@example.com');
console.log(blacklist);

let isBlacklisted = checkBlacklist('username', 'admin');
console.log('Is admin blacklisted?', isBlacklisted);
