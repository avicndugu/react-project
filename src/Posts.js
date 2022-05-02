import './App.css';
import React, { useState, useEffect } from 'react';

function Posts() {
  const [data, setData] = useState([]); 

  useEffect(() => { 
    const fetchData = () => {
      fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => { setData(data) })
      };
      fetchData();
  },[]);

  return (
    <div className="App">
      <div>
        <div>
          {data.map(item => (
            <>
              <p key={item.userId}>{item.userId}</p>
              <li key={item.userId}>{item.title}</li>
              <li key={item.userId}>{item.body}</li>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Posts;