import React, { useRef } from 'react' 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'  

const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6',
  ]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      ScrollTrigger:{
        trigger:imageDivRef.current,
        markers:true,
        start:'top 36%',
        end:'top -100%',
        scrub:true,
        pin:true,
        onUpdate:(elem) => {
          const imageIndex = Math.floor(elem.progress * imageArray.length)
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
  return (
    <div>
         <div className = 'section-1'>
    <div ref={imageDivRef} className = ' absolute overflow-hidden w-[15vw] h-[20vw] top-30 left-85 rounded-3xl '>
      <img ref={imageRef} className='w-full h-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
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