import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Project = () => {
  const project = [{
    image1:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
    image2:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
  },{
    image1:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
    image2:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
  },{
    image1:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
    image2:'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93',
  }]

  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function(){
    gsap.from('.hero',{
      height:'100px',
      stagger:{
      amount:0.4
      },
    scrollTrigger:{
      trigger:'.lol',
      start:'top 100%',
      end:'top -150%',
      scrub:true
    }
    })
  })

  return (
    <div className='p-3'>
      <div className=' pt-[45vh] pb-10'>
        <h2 className='font-[fontie -2] text-[13vw] font-semibold uppercase'>WORK <sup className='relative -top-[7vw] -ml-15  text-[3vw]  ' >17</sup></h2>
      </div>
      <div className='-mt-20 lol '>
      {project.map(function(elem){
        return <div className='hero w-full  h-[600px] mb-4 flex gap-4  '>
        <ProjectCard image1={elem.image1} image2={elem.image2} />
        </div>
      })}
       
      </div>
    </div>
  )
}

export default Project