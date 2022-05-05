import React, {useState, useEffect} from 'react'
import useLocalStorage from 'use-local-storage'

import './Panel_style.scss'

import { HiHome } from 'react-icons/hi';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosPodium } from 'react-icons/io';
import { RiLiveFill } from 'react-icons/ri';
import { IoMdSunny } from 'react-icons/io';
import { IoMdMoon } from 'react-icons/io';

import Pilots from '../Pilots/Pilots';
import Home from '../Home/Home';
import Stats from '../Stats/Stats';
import Live from '../Live/Live';


function Panel() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const [themeIcon, setThemeIcon] = useState<JSX.Element>();

  const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      theme === 'light' ? setThemeIcon(<IoMdSunny/>) : setThemeIcon(<IoMdMoon/>);
      setTheme(newTheme);
  }

  useEffect(() => {
    theme === 'dark' ? setThemeIcon(<IoMdSunny/>) : setThemeIcon(<IoMdMoon/>);
  }, [theme])


  const [activeComponent, setActiveComponent] = useState<JSX.Element>();

  const mountComponent = (event: React.MouseEvent<HTMLButtonElement>) => {
    
    const active_panel = document.querySelector('#active-panel');
    
    const obj: HTMLButtonElement = event.currentTarget;
    const nameComponent: string = obj.name;

    if (active_panel != null) {
      switch(nameComponent) {

        case "Home":
          setActiveComponent(<Home/>);
        break;

        case "Pilots":
          setActiveComponent(<Pilots/>);
        break;

        case "Stats":
          setActiveComponent(<Stats/>);
        break;

        case "Live":
          setActiveComponent(<Live/>);
        break;

        default:
          setActiveComponent(<Home/>);
        break;
      
      } 
    }
  
  };

  return (
    <div className="Panel" data-theme={theme}>

      <div className="navbar">
        <div className="Navbar">
            <div className="logo"> <p> FFast </p> </div>

            <ul>
              <li> 
                  <button 
                      name="Home" 
                      onClick={mountComponent}> <HiHome/> Home </button> </li>
              <li> 
                  <button 
                      name="Pilots" 
                      onClick={mountComponent}> <HiUserGroup/> Pilots </button> </li>
              <li> 
                  <button 
                      name="Stats" 
                      onClick={mountComponent}> <IoIosPodium/> Stats </button> </li>
              <li> 
                  <button 
                      name="Live" 
                      onClick={mountComponent}> <RiLiveFill/> Live </button> </li>
            </ul>


            <div className="themeButton">
              <button onClick={switchTheme}> {themeIcon} </button>
            </div>

        </div>
      </div>

      <div id="active-panel" className="active">
        {activeComponent}
      </div>

    </div>
  )
}

export default Panel