import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';

export default function RoutedUsers() {
  const [data, setData] = useState([]); 

  useEffect(() => { 
    const fetchData = () => {
      fetch('http://localhost:3000/ama-influencer.json')
        .then(response => response.json())
        .then((data) => { setData(data) })
      };
      fetchData();
  },[]);

  return (
    <>
      <h2>Routed Users Page</h2>
      {data.map(user => (
        <>  
          <Link to={`/routedusers/${user.username}`} key={user.id}>{user.id} {user.firstname} {user.secondname}</Link>
          <br />
        </>
      ))}
      <Outlet />
    </>
  )
}