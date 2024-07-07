import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function WordDetail() {
  const { wordId } = useParams();
  const [wordDetail, setWordDetail] = useState(null);

  useEffect(() => {
    const fetchWordDetail = async () => {
      const response = await axios.get(`/api/words/${wordId}`);
      setWordDetail(response.data);
    };
    fetchWordDetail();
  }, [wordId]);

  if (!wordDetail) return <div>Loading...</div>;

  return (
    <div>
      <h1>{wordDetail.word}</h1>
      <p>{wordDetail.translation}</p>
      <h3>例文</h3>
      <ul>
        {wordDetail.examples.map((example, index) => (
          <li key={index}>{example}</li>
        ))}
      </ul>
      <h3>関連語</h3>
      <ul>
        {wordDetail.relatedWords.map((relatedWord, index) => (
          <li key={index}>{relatedWord}</li>
        ))}
      </ul>
    </div>
  );
}

export default WordDetail;
