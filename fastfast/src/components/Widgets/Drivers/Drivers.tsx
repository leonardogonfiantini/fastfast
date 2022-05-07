import React, {useState, useEffect} from 'react'
import './Drivers_style.scss'
import Driver from './Driver/Driver'

function DriversBar() {

  const [drivers, setDrivers] = useState([])
  const [ready, isReady] = useState(false)

  useEffect(() => {

    const getDrivers = async() => {
    
      const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
      };
      
      let json_result: any = {};
  
      await fetch("http://ergast.com/api/f1/2022/drivers.json", requestOptions)
        .then(response => response.json())
        .then(result => json_result = result.MRData.DriverTable.Drivers)
        .catch(error => console.log('Error, drivers fetch is failed', error));
  
        setDrivers(json_result);
        isReady(true);
    }

    getDrivers();

  }, [])


  const [driverRow, setDriverRow] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (ready === true) {
      let copy: JSX.Element[] = [];
      for (let i = 0; i < drivers.length; i++)
        copy = [...copy, <Driver key={i} Number = {drivers[i]['permanentNumber']} ShortName = {drivers[i]['code']} />];

      setDriverRow([...driverRow, ...copy])

    }
  }, [ready])

  return (
    <div className='Drivers'>
      <h2> Drivers: </h2>
      {driverRow}
    </div>
  )
}

export default DriversBar