import React from 'react'

const TopBar = () => {

  return (
    <div className='flex justify-between items-center py-5 px-10 bg-transparent'>
      <div className="flex flex-col justify-center items-center gap-1 bg-transparent">
        <h2 className="font-primary text-5xl tracking-wider text-white">Login</h2>
        <p className="text-white font-secondary tracking-wide text-md">Inspiring Future</p>
      </div>

      <div className="">
        <button className="bg-transparent border-2 px-8 py-2 hover:text-gray-500 hover:border-gray-500 transition-all duration-300 rounded-full text-white">
          Our Team
        </button>
      </div>
    </div>
  )
}

export default TopBar
