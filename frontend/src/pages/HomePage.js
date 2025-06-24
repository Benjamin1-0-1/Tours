import React, { useEffect, useState } from 'react';
import axios from 'axios';


function HomePage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/home')
      .then((res) => setData(res.data))
      .catch((err) => console.error("Failed to fetch home data:", err));
  }, []);

  if (!data) {
    return <div style={{ padding: '2rem' }}>Loading...</div>;
  }

  return (
      <div>
        <p>HI</p>
      <div style={{ padding: '2rem' }}>
        <h2>{data.aboutTitle}</h2>
        <p>{data.aboutText}</p>
      </div>
    </div>
  );
}

export default HomePage;
//awesome
