import React from 'react';
import axios from 'axios';

function DictionaryManagement() {
  const handleExport = async () => {
    const response = await axios.get('/api/dictionary/export');
    const blob = new Blob([JSON.stringify(response.data)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dictionary.otm.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleImport = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    await axios.post('/api/dictionary/import', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    alert('辞書がインポートされました');
  };

  return (
    <div>
      <h2>辞書管理</h2>
      <button onClick={handleExport}>辞書をエクスポート</button>
      <input type="file" onChange={handleImport} />
    </div>
  );
}

export default DictionaryManagement;
