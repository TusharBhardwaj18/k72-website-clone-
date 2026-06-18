import React, { useRef } from 'react'
import { Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  const stairparentref = useRef(null)

  useGSAP(function(){

    const tl = gsap.timeline()
    tl.to(stairparentref.current,{
      display : 'block'
    })
    
      tl.from('.stair',{
        height:0,
        duration :2,
        stagger : {
          amount:-0.25
        }
      })
      tl.to('.stair',{
        y:'100%',
        stagger:{
          amount:-0.25
        }
      })
      tl.to(stairparentref.current,{
        display:'none'
      })
       tl.to('.stair',{
        y:'0%',
        
      })
  })
  return (
    <div className='text-white'>
    <div ref={stairparentref} className= 'h-screen w-full fixed z-10 top-0'>
      <div className='h-screen w-full flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App