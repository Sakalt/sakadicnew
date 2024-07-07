import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SentenceOfTheDay() {
  const [sentence, setSentence] = useState('');

  useEffect(() => {
    const fetchSentence = async () => {
      const response = await axios.get('/api/sentences/today');
      setSentence(response.data.sentence);
    };
    fetchSentence();
  }, []);

  return (
    <div>
      <h2>今日の例文</h2>
      <p>{sentence}</p>
    </div>
  );
}

export default SentenceOfTheDay;
