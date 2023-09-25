import React, { useContext, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { navData } from '../Data/navData';
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { NavContext } from '../Global/NavContext';
const TopBar = () => {
  const {navStates,setNavStates } = useContext(NavContext);
  const [navState, setnavState] = useState(false);

  return (
    <div className='relative flex justify-between items-center py-5 px-10 bg-transparent'>
      <div className="flex flex-col justify-center items-center gap-1 bg-transparent">
        <h2 className="font-primary text-3xl lg:text-5xl tracking-wider text-white">LOGIN</h2>
        <p className="text-white font-secondary tracking-wider text-sm lg:text-md">Inspiring Future</p>
      </div>

      <div className="">
        <button className="hidden md:hidden lg:flex bg-transparent border-2 px-8 py-2 hover:text-gray-500 hover:border-gray-500 transition-all duration-300 rounded-full text-white">
          Our Team
        </button>

        {/* Mobile NAV BOX */}
        {
          navState && (
            <div className="absolute px-3 py-4 z-40 top-0 left-0 w-full  h-[50vh] bg-black text-white flex flex-row  justify-between ">
              {/* Mobile view Left */}
              <div className="flex flex-col gap-4 items-start justify-start">

                <button className="group bg-transparent border-2 px-8 py-2  hover:border-gray-500 transition-all duration-300 rounded-full text-white"><span className=' group-hover:text-gray-500 duration-[700ms] transition-all text-sm'>Our Team</span> </button>
                

                {
                    navData.map((item, index) => (
                        <div key={item.id} className="group flex font-bold flex-row items-center gap-2 text-sm  text-[#bdb6b6] hover:text-white cursor-pointer">
                        <div className="bg-gray-400 group-hover:bg-white p-2 rounded-full ">
                                <AiFillHome className='text-black'/>
                        </div>
                            <Link className='tracking-wider text-sm' to="/">{item.title }</Link>
                    </div>
                    ))
                }

              </div>


              {/* Mobile View Right */}

              <div className="">
                <RxCross2 className='cursor-pointer' onClick={() => {
                  setnavState(!navState)
                  setNavStates(!navStates)
                }}/>
              </div>


            </div>
          )
}
       
        <GiHamburgerMenu onClick={() => {
          setnavState(!navState)
          setNavStates(!navStates)
        }} className='lg:hidden  scale-[2] cursor-pointer font-bold text-white'/>
      </div>
    </div>
  )
}

export default TopBar
