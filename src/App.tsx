import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card, { ICardProps } from './components/Card';
import logo from './logo.svg';
import './App.scss';

function App() {
  const [data, setData] = useState<ICardProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/timeline/');
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style={{ width: '50px' }} />
      </header>

      <section className="container">
        {data.map((item, index) => (
          <Card
            key={index.toString()}
            id={item.id}
            user={item.user}
            message={item.message}
            medias={item.medias}
            like_users={item.like_users}
            likes={item.likes}
            tags={item.tags}
            created_at={item.created_at}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
