import './App.css';
import React, { useState, useEffect } from 'react';

function Posts() {
  const [data, setData] = useState([]); 

  useEffect(() => { 
    const fetchData = () => {
      fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => { setData(data)})
        // Filtering the data immediately
        // .then((data) => { setData(data.filter( content => content.userId == 10 ))})
      };
      fetchData();
  },[]);

  let filteredData =data.filter( content => content.userId == 10 )
  console.log(filteredData);

  return (
    <div className="App">
      <div>
        {/*
          <div>
            {(data.map(item => (
              <>
                <p key={item.userId}>{item.userId}</p>
                <li key={item.userId}>{item.title}</li>
                <li key={item.userId}>{item.body}</li>
              </>
            )))}
          </div>
      */}
      {/* Filtering the data in JSX */}
        <div>
          {data.filter( person => person.userId === 1).map(
            item => (
              <>
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </>
            )
          )}
        </div>

      </div>
    </div>
  );
}

export default Posts;