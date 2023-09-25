import React from 'react'
import Particles from 'react-tsparticles'
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim"; 


const Particalss = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);
    
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    
      return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                
                
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1200,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "edge",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
    }

export default Particalss
