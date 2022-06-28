import { useState, useEffect } from 'react';

function AppFetchData() {
  const [data, setData] = useState("");
  // const url="https://api.adviceslip.com/advice";

  function useFetch(url){
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json.slip.advice);
        } catch(error) {
          console.log("error:", error);
        }
      };
      fetchData();
    },[url]);
    return(data)
}
useFetch('https://api.adviceslip.com/advice');

// console.log(json.slip.advice);
  return (
    <>
      <p>Hello Fetch Data</p>
      <p>{data}</p>
    </>
  )
}

export default AppFetchData;

