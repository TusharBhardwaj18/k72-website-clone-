import React, { createContext, useState } from 'react'

const NavContext = ({children}) => {

   export const NavbarcreateContext = createContext()
    const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
        <NavbarcreateContext.Provider value={ [navOpen, setNavOpen]}>
        {childern}
        </NavbarcreateContext.Provider>
    </div>
  )
}

export default NavContext