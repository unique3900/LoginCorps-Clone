import React, { useContext } from 'react'
import bg from './assets/bg.jpg';
import Particles from 'react-tsparticles'
import {
    useCallback
} from "react";
import {
    loadSlim
} from "tsparticles-slim";
import Particalss from './Components/Particalss';
import TopBar from './Components/TopBar';
import Hero from './Components/Hero';
import { NavContext } from './Global/NavContext';

const App = () => {

    const { navStates,setNavStates} = useContext(NavContext);


    var imgStyle = {

        height: "100vh",
        width: "100%",
        objectFit: "cover",
        opacity: "0.9"


    }


    return (
    //   
        <div className="-z-40 bg-site h-screen bg-no-repeat bg-cover  opacity-90">
            
            <div className={!navStates?"z-20 h-screen bg-gradient-to-tr from-[rgba(10,21,143,0.3)] to-[rgba(143,15,116,0.9)] bg-blend-multiply": "z-20 h-screen bg-gradient-to-tr from-[rgba(3,4,8,0.9)] to-[rgba(46,43,46,0.9)] bg-blend-multiply" }>
      <TopBar className="z-40" />
           <Hero/>
        <Particalss/>
        </div>
        </div>
    )
}

export default App
