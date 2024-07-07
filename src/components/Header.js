import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav style={{ backgroundColor: '#EE7C00' }}>
      <Link to="/">辞書</Link>
      <Link to="/sentences">例文</Link>
      <Link to="/settings">設定</Link>
      <Link to="/image">画像</Link>
      <Link to="/new-word-request">造語依頼</Link>
    </nav>
  );
}

export default Header;
