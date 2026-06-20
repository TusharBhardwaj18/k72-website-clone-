import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'
const stair = (props) => {

    const currentpath= useLocation().pathname

    console.log(currentpath);
     const stairparentref = useRef(null)
     const pageref = useRef(null)

  useGSAP(function(){

    const tl = gsap.timeline()
    tl.to(stairparentref.current,{
      display : 'block'
    })
    
      tl.from('.stair',{
        height:0,
        duration :2,
        stagger : {
          amount:-0.2
        }
      })
      tl.to('.stair',{
        y:'100%',
        stagger:{
          amount:-0.2
        }
      })
      tl.to(stairparentref.current,{
        display:'none'
      })
       tl.to('.stair',{
        y:'0%',
        
      })
      gsap.from(pageref.current,{
      opacity:0,
      delay:1.3,
      scale:1.2
      })
  },[currentpath])
  console.log(props.children);

  return (
   <div>
     <div ref={stairparentref} className= 'h-screen w-full fixed z-10 top-0'>
      <div className='h-screen w-full flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      </div>
<div ref={pageref} >
  {props.children}
</div>
      
   </div>
  )
}

export default stair