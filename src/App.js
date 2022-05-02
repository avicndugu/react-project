import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]); 

  useEffect(() => { 
    const fetchData = () => {
      fetch('http://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((data) => { setData(data) })
      };
      fetchData();
  },[]);

  return (
    <div className="App">
      <div>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.id}   <span>{item.name }</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;