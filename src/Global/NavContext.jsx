import React, { createContext, useState } from 'react'


export const NavContext = createContext();
const Context = ({children}) => {
    
  const [navStates,setNavStates] = useState(false);
  return (
    <NavContext.Provider value={{navStates,setNavStates}}>
      {children}
    </NavContext.Provider>
  )
}

export default Context
