import React from 'react'
import './Driver_style.scss'

import ReactCountryFlag from "react-country-flag"

type Props = {
    Number: String;
    Country: String;
    ShortName: String;
};

function Driver({Number, Country, ShortName}: Props) {
  var nationalities = require("i18n-nationality");
  nationalities.registerLocale(require("i18n-nationality/langs/en.json"));


  return (
    <div className="Driver">
        <span className="Number"> {Number} </span>
        <span className="Country"> 
          <ReactCountryFlag 
            countryCode={nationalities.getAlpha2Code(Country, 'en') || "MC" } 
            svg
            style={{
              width: '100%',
              height: '100%',
            }}/> 
        </span>
        <span className="ShortName"> {ShortName} </span>
    </div>
  )
}

export default Driver