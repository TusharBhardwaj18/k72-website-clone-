import React, { createContext, useState ,useEffect} from 'react'
import { useLocation } from 'react-router-dom'

export const NavContext = createContext()
export const navbarcolorcontext = createContext()

 const NavContextProvider = ({children}) => {

  const [navColor, setNavColor] = useState('white')
    const [navOpen, setNavOpen] = useState(false)
    const locate = useLocation().pathname
    useEffect(function(){
       if(locate == '/Project' || locate == '/agence'){
            setNavColor('black')
        }else{
            setNavColor('white')
        }
    },[locate])
    
  return (
    <div>
       <NavContext.Provider value={[navOpen, setNavOpen]}>
                <navbarcolorcontext.Provider value={[navColor,setNavColor]}>
                    {children}
                </navbarcolorcontext.Provider>
            </NavContext.Provider>
    </div>
  )
}

export default NavContextProvider