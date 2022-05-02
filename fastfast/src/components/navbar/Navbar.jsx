import React from 'react'
import './Navbar_style.scss'

import { HiHome } from 'react-icons/hi';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosPodium } from 'react-icons/io';
import { RiLiveFill } from 'react-icons/ri'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="logo">  <p> FFast</p></div>

        <ul>
          <li> <div className="menu-item"> <HiHome/> Home </div> </li>
          <li> <div className="menu-item"> <HiUserGroup/> Pilots </div> </li>
          <li> <div className="menu-item"> <IoIosPodium/> Ranking & Stats </div> </li>
          <li> <div className="menu-item"> <RiLiveFill/> Live </div> </li>
        </ul>

    </div>
  )
}

export default Navbar