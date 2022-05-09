import React, {useEffect, useState} from 'react'

function Standing() {

  const [standing, setStanding] = useState([])
  const [ready, isReady] = useState(false)

  useEffect(() => {

    const getDrivers = async() => {
    
      const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
      };
      
      let json_result: any = {};
  
      await fetch("http://ergast.com/api/f1/2022/driverStandings.json", requestOptions)
        .then(response => response.json())
        .then(result => json_result = result.MRData.StandingsTable.StandingsLists)
        .catch(error => console.log('Error, drivers fetch is failed', error));
  
        setStanding(json_result);
        isReady(true);
    }

    getDrivers();

  }, [])


  useEffect(() => {
    if (ready === true) { 
        console.log(standing)
    }
  }, [ready])


  return (
    <div className="Standing">
        Standing
    </div>
  )
}

export default Standing