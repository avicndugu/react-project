import './App.css';
import React, { useState, useEffect } from 'react';
import Users from './Users.js';
import Posts from './Posts.js';
import { Link } from "react-router-dom";

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
            <li key={item.id}>{item.id} <span>{item.name}</span></li>
          ))}
        </ul>
      </div>
      <Link to="/invoices">Invoices</Link>
      <Users allUsersData ={ data } />
      <Posts />
    </div>
  );
}

export default App;