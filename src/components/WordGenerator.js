import React, { useState } from 'react';
import axios from 'axios';

function WordGenerator() {
  const [baseWords, setBaseWords] = useState('');
  const [generatedWord, setGeneratedWord] = useState('');

  const handleGenerate = async () => {
    const response = await axios.post('/api/words/generate', { baseWords });
    setGeneratedWord(response.data.word);
  };

  return (
    <div>
      <h2>単語生成</h2>
      <div>
        <label>
          基本となる言葉:
          <input
            type="text"
            value={baseWords}
            onChange={(e) => setBaseWords(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleGenerate}>生成</button>
      <div>
        <h3>生成された単語</h3>
        <p>{generatedWord}</p>
      </div>
    </div>
  );
}

export default WordGenerator;
