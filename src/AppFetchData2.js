import { useState, useEffect } from 'react';

function AppFetchData2() {
  // const url="https://api.adviceslip.com/advice";
  // const [result, setResult] = useFetch('https://api.adviceslip.com/advice');


  function DataFetch(url){
    const [data, setData] = useState("");
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
  const result = DataFetch('https://api.adviceslip.com/advice');

  // console.log(json.slip.advice);
  console.log(result);

  if (!result){
    return (
      <p>Loading</p>
    )
  } else {
    return (
      <>
        <p>Hello Fetch Data</p>
        <p>{result}</p>
      </>
    )
  }
}
export default AppFetchData2;

