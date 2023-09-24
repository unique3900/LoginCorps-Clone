import React from 'react'
import bg from '../public/img/bg.jpg';
import Particles from 'react-tsparticles'
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"; 
import Particalss from './Components/Particalss';

const App = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);
  const fetchedImgSrc = './img/bg.jpg';


  var imgStyle = {
  height: "100vh", width: "100%", objectFit: "cover",
      opacity: "0.9"
    
  }


  return (

    <div className="relative  h-screen">

      <div className="absoulte" >
        <img src={bg} alt="" className=' object-center '  style={imgStyle}/>
      </div>

<Particalss/>
      
    </div>
  )
}

export default App
