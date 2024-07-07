import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = async () => {
    const response = await axios.post('/api/login', { email, password });
    if (response.data.requires2FA) {
      alert('2FAコードを入力してください');
    } else {
      alert('ログインしました');
    }
  };

  const handle2FA = async () => {
    await axios.post('/api/verify-otp', { email, otp });
    alert('ログインしました');
  };

  return (
    <div>
      <h2>ログイン</h2>
      <div>
        <label>
          メールアドレス:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          パスワード:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleLogin}>ログイン</button>
      { /* 2FAコード入力フィールド */ }
      <div>
        <label>
          2FAコード:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handle2FA}>2FA認証</button>
    </div>
  );
}

export default Login;
