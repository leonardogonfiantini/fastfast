import React, {useState} from 'react'
import './Panel_style.scss'

import { HiHome } from 'react-icons/hi';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosPodium } from 'react-icons/io';
import { RiLiveFill } from 'react-icons/ri';

import Pilots from '../Pilots/Pilots';


function Panel() {

  const [activeComponent, setActiveComponent] = useState<JSX.Element[]>([]);

  function mountHome() {
    var obj = document.querySelector('#active-panel');
    if (obj != null) {
      setActiveComponent([...activeComponent, <Pilots/>])
    }
  }

  return (
    <div className="Panel">

      <div className='nav'>
        <div className='Navbar'>
            <div className='logo'>  <p> FFast </p> </div>

            <ul>
              <li> <button onClick={mountHome}> <HiHome/> Home </button> </li>
              <li> <button> <HiUserGroup/> Pilots </button> </li>
              <li> <button> <IoIosPodium/> Stats </button> </li>
              <li> <button> <RiLiveFill/> Live </button> </li>
            </ul>

        </div>
      </div>

      <div id="active-panel" className="active">
        {activeComponent}
      </div>

    </div>
  )
}

export default Panel