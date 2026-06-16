import React, { useRef } from 'react' 
import { useGSAP } from '@gsap/react'

const Agence = () => {
  const imagedivRef = useRef(null)
  useGSAP(function(){
    
  })
  return (
    <div>
         <div className = 'section-1'>
    <div ref={imagedivRef} className = ' absolute overflow-hidden w-[15vw] h-[20vw] top-30 left-85 rounded-3xl '>
      <img className='w-full h-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
    </div>
     <div className = ' relative font-[fontie 2]'>
      <div className = 'mt-[50vh] '>
        <h1 className="text-[22vw] text-center uppercase leading-[18vw] ">SEVEN7Y <br /> 
TWO
</h1>
      </div>
      <div className = ' pl-[41%] mt-10'>
        <p className="text-4xl "> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
      </div>
    </div>
   </div>
   <div className="section-2 h-screen"></div>
    </div>
  )
}

export default Agence