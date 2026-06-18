import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
const stair = () => {

    const currentpath= useLocation().pathname

    console.log(currentpath);
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
  },[currentpath])

  return (
    <div ref={stairparentref} className= 'h-screen w-full fixed z-10 top-0'>
      <div className='h-screen w-full flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      </div>
  )
}

export default stair