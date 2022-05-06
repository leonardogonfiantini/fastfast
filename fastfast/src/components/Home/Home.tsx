import React, {useState, useEffect} from 'react'

function Home() {

  const [drivers, setDrivers] = useState({})
  const [ready, isReady] = useState(false)

  useEffect(() => {

    const getDrivers = async() => {
    
      const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
      };
      
      let json_result: any = {};
  
      await fetch("http://ergast.com/api/f1/2022/drivers.json", requestOptions)
        .then(response => response.text())
        .then(result => json_result = result)
        .catch(error => console.log('Error, drivers fetch is failed', error));
  
        setDrivers(json_result);
        isReady(true);
    }

    getDrivers();

  }, [])

  useEffect(() => {
    if (ready === true) {
      console.log(drivers);
    }
  }, [ready])

  return (
    <div className="Home">

      
      </div>
  )
}

export default Home