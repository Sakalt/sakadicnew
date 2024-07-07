import React, { useState } from 'react';
import axios from 'axios';

function UserSettings() {
  const [font, setFont] = useState('');
  const [permissions, setPermissions] = useState({
    edit: false,
    manage: false,
    delete: false,
  });

  const handleSaveSettings = async () => {
    await axios.post('/api/users/settings', { font, permissions });
    alert('設定が保存されました');
  };

  return (
    <div>
      <h2>設定</h2>
      <div>
        <label>
          フォント変更:
          <input
            type="text"
            value={font}
            onChange={(e) => setFont(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          編集権限:
          <input
            type="checkbox"
            checked={permissions.edit}
            onChange={(e) =>
              setPermissions({ ...permissions, edit: e.target.checked })
            }
          />
        </label>
      </div>
      <div>
        <label>
          管理権限:
          <input
            type="checkbox"
            checked={permissions.manage}
            onChange={(e) =>
              setPermissions({ ...permissions, manage: e.target.checked })
            }
          />
        </label>
      </div>
      <div>
        <label>
          削除権限:
          <input
            type="checkbox"
            checked={permissions.delete}
            onChange={(e) =>
              setPermissions({ ...permissions, delete: e.target.checked })
            }
          />
        </label>
      </div>
      <button onClick={handleSaveSettings}>保存</button>
    </div>
  );
}

export default UserSettings;
