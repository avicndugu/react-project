import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';


export default function RoutedUser() {
  let params = useParams();
  const [data, setData] = useState([]); 

  useEffect(() => { 
    const fetchData = () => {
      fetch('http://localhost:3000/ama-influencer.json')
        .then(response => response.json())
        .then((data) => { setData(data) })
      };
      fetchData();
  },[]);

{/*  let user = data.find((user) => user.username === params.userName);
  console.log(user)*/}

  console.log(data)
  return (
    <>
      <h2> Single User: {params.userName} </h2>
      {
        console.log(params.userName)
      }
      {
        (data.find((singleuser) => singleuser.username === params.userName)).map(
          post => (
            <p>Posts</p>
          )
        )
      }
{/*      <p>User ID: { user.id }</p>
       {user.userposts.map((post)=> (
          <>
            <p>post</p>
            <p>{ post.title }</p>
            <p>{ post.body }</p>
            <p>{ post.answer }</p>

          </>
        ))}
        */}
      <p>Posts: </p>
      {
        console.log(data.find((myuser) => myuser.username === params.userName))

      }
    </>
  )
}
  