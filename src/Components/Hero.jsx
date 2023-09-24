import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { navData } from '../Data/navData';
const Hero = () => {
    return (

        <div className='translate-y-2/4 px-14 justify-center items-center lg:grid text-white  grid-flow-col gap-3 grid-cols-[1fr_3fr_1fr]'>
            {/* Navigation Side */}
            <div className="hidden lg:flex flex-col gap-4">

                {
                    navData.map((item, index) => (
                        <div key={item.id} className="group flex font-bold flex-row items-center gap-2 text-lg  text-[#bdb6b6] hover:text-white cursor-pointer">
                        <div className="bg-gray-400 group-hover:bg-white p-2 rounded-full ">
                                <AiFillHome className='text-black'/>
                        </div>
                            <Link className='tracking-wider' to="/">{item.title }</Link>
                    </div>
                    ))
                }
     
                
               
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className='text-3xl font-bold -tracking-normal text-center'>"Let us make our future now and let us make our dreams a reality."
                </h1>
                <p className="text-2xl tracking-wide">-Welcome to Login</p>
            </div>
            <div className="hidden lg:flex flex-col gap-2 ">
                
            </div>
        </div>


    )
}

export default Hero
