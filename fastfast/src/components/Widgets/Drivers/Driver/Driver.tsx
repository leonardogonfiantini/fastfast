import React from 'react'
import './Driver_style.scss'

type Props = {
    Number: String;
    ShortName: String;
};

function Driver({Number, ShortName}: Props) {
  return (
    <div className="Driver">
        {Number}
        {ShortName}
    </div>
  )
}

export default Driver