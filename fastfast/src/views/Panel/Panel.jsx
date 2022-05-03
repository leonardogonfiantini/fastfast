import React from 'react'

import './Panel_style.scss'

import Navbar from '../../components/navbar/Navbar'

function Panel() {
  return (
    <div className='Panel'>
        <div className="navbar"> <Navbar /> </div>
        <div className="active"> Ciao </div>
    </div>
  )
}

export default Panel