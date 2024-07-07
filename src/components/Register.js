import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    await axios.post('/api/register', { email, password });
    alert('アカウントが作成されました');
  };

  return (
    <div>
      <h2>アカウント作成</h2>
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
      <button onClick={handleSubmit}>登録</button>
    </div>
  );
}

export default Register;
