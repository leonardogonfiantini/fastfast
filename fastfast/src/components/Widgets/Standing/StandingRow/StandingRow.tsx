import React from 'react'
import './StandingRow_style.scss'

type Props = {
    Name: String;
    Points: String;
    Position: String;
    Wins: String;
    Manufacturer: String;
};

function StandingRow({Name, Position, Points, Wins, Manufacturer}: Props) {
  return (
    <div className="StandingRow"> 
      <span> {Name} </span>
      <span> {Position} </span>
      <span> {Points} </span>
      <span> {Wins} </span>
      <span> {Manufacturer} </span>
    </div>
  )
}

export default StandingRow