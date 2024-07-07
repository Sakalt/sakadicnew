import React, { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchDictionary = async () => {
    const response = await axios.get(`/api/search?query=${query}`);
    setResults(response.data);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="検索..."
      />
      <button onClick={searchDictionary}>検索</button>
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.word}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
