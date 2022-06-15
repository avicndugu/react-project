const [data, setData] = useState([]); 
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => { 
    const fetchData = async() => {

      try{
        // set data to loading
        setLoadingData(true);

      fetch('http://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((data) => { setData(data) })
        {/*.then((data) => { setData({data: data}) });*/}
      } catch(error) {
        console.log("error", error);
      }


      };
    const transformData = () => {
      fetchData();
      userdata.current = data.filter((post) => post.id === parseInt(params.userID, 10));
      var user = data.find((post) => post.id === parseInt(params.userID, 10));
      console.log(user)
    }
    transformData();
  },[]);
  console.log(data[0]);
 
  console.log(userdata)
  let drall = data[`${parseInt(params.userID, 10)}`];

  s