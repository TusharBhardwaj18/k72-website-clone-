import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useContext } from 'react'
import {NavContext} from '../../context/NavContext'
import { useEffect, useState } from 'react'

const FullScreenNav = () => {
   
      const  fullNavLinksRef = useRef(null)
      const fullscreenRef = useRef(null)
     const  [navOpen, setNavOpen]  = useContext(NavContext)

    function gsapAnimation(){
    const tl = gsap.timeline()
    tl.to('.fullscreennav',{
      display:'block'
    })
      tl.to('.stairing',{
        delay:0.2,
        height:'100%',
        stagger : {
          amount:-0.3
        }
      })
      tl.to('.link',{
        opacity:1,
        rotateX: 0,
        stagger: {
            amount: 0.3
        }
      })
      tl.to('.navlink',{
        opacity:1
      })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }
    useGSAP(() => {
     if(navOpen){
      gsapAnimation()
      }else{
        gsapAnimationReverse()
     }
    }, [navOpen])
  return (
    <div ref={fullscreenRef} id = 'fullscreennav' className='fullscreennav hidden text-white overflow-hidden  h-screen w-full absolute z-50 '>
   <div  className='h-screen w-full fixed'>
      <div className='h-screen w-full flex'>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
      </div>
   </div>
   <div ref={fullNavLinksRef} className='relative'>
       <div className='navlink flex w-full justify-between items-start'>
    <div className=''>
         <div className=' lg:w-36 w-24 p-2 '>
         <svg className='w-full' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                      <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
       </div>
       </div>
       <div onClick={()=>{
        setNavOpen(false)
       }} className=' h-20 w-20 top-1 right-2  absolute cursor-pointer z-50'>
        <div className='h-full  w-0.5 absolute left-1/2 -rotate-45 -translate-x-1/2  bg-white'></div>
          <div className='h-full  w-0.5 right-14 left-1/2 -translate-x-1/2 absolute rotate-45  bg-white'></div>
       </div>
      </div>
        <div className='py-10 '>
            <div className='link  origin-top border-t-1 border-white relative ' >
                <h1 className='font-[fontie 2] text-[9vw] h-23 leading-[0] pt-10 text-center uppercase'>WORK</h1>
            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h2>
                <img className = 'h-20  rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h3 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h3>
                <img className = 'h-20 rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
            </div>
            
            </div>
          
           </div>
                   <div className='link origin-top border-t-1 border-white relative ' >
                <h1 className='font-[fontie 2] text-[9vw] h-23 leading-[0] pt-10 text-center uppercase'>AGENCY</h1>
            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h2>
                <img className = 'h-20  rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h3 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h3>
                <img className = 'h-20 rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
            </div>
            </div>
           </div>
                   <div className='link origin-top border-t-1 border-white relative ' >
                <h1 className='font-[fontie 2] text-[9vw] h-23 leading-[0] pt-10 text-center uppercase'>CONTACT</h1>
            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h2>
                <img className = 'h-20  rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h3 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h3>
                <img className = 'h-20 rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
            </div>
            </div>
           </div>
                   <div className='link origin-top border-y-1 border-white relative ' >
                <h1 className='font-[fontie 2] text-[9vw] h-23 leading-[0] pt-10 text-center uppercase'>BLOG</h1>
            <div className='moveLink absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h2>
                <img className = 'h-20  rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h3 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h3>
                <img className = 'h-20 rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
            </div>
            </div>
           </div>
          

           
        </div>
   </div>
    </div>
  )
}

export default FullScreenNav