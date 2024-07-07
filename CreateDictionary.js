import React, { useState } from 'react';
import axios from 'axios';

function CreateDictionary() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = async () => {
    await axios.post('/api/dictionaries', { name, description });
    alert('辞書が作成されました');
  };

  return (
    <div>
      <h2>辞書作成</h2>
      <div>
        <label>
          辞書名:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          説明:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleCreate}>作成</button>
    </div>
  );
}

export default CreateDictionary;
