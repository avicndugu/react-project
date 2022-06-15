import { useParams } from "react-router-dom";
import React, { useState, useEffect, useRef } from 'react';

function useFetch(url) {
  const [loadingData, setLoadingData] = useState(false);
  const [data, setData] = useState(null);
  useEffect(() => { 
    const fetchData = async() => {
      try{
        setLoadingData(true);
        fetch(url)
          .then(response => response.json())
          .then((data) => { setData(data) })
        setLoadingData(false);
      } catch(error) {
        console.log("error", error);
      }
    };
    fetchData();
  },[]);
  return[loadingData, data];
}

export default function RoutedUser() {
  let params = useParams();
  const userdata = useRef(null);
  const [isDataLoading, data] = useFetch('http://jsonplaceholder.typicode.com/posts');

if (isDataLoading || !data){
  return (<p>Data is loading...</p>)
}
else {
    return (
      <>
        {(data.filter((post) => post.userId === parseInt(params.userID, 10) )).map((item) => (
          <>
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.body}</p>
          </>
        ))}

        <h2> Single User: {params.userID} </h2>
        {/*<p>Title:{userdata.title}</p>*/}

      </>
    )
  }
}
  
