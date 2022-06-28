import './App.css';
import React, { useState, useEffect } from 'react';
import Users from './Users.js';
import Posts from './Posts.js';
import ParentElement from './ParentElement.js';
import { Link } from 'react-router-dom';
import AppFetchData2 from './AppFetchData2';


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
    <AppFetchData2 />
      <div>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.id} <span>{item.name}</span></li>
          ))}
        </ul>
      </div>
      <Link to="/invoices">Invoices</Link>
      <Link to="/routedusers">Routed Users</Link> 
      <Users allUsersData ={ data } />
      <ParentElement />
      <Posts />
    </div>
  );
}

export default App;