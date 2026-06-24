import React from 'react'

const ProjectCard = (props) => {
  return (
     <>
          <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
          <img className='h-full w-full object-cover'   src={props.image1} alt="" />
          <div className='opacity-0 transition-all group-hover:opacity-100 absolute h-full w-full flex items-center justify-center top-0 left-0 bg-black/10'>
            <h2 className='uppercase text-6xl  font-[fontie 1] font-semibold border-3 justify-center items-center -pb-5 -pt-4  px-5 text-white border-white rounded-full'>VIEW PROJECT</h2>
          </div>
          </div>
            <div className='w-1/2 group transition-all relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
          <img className='h-full w-full object-cover'   src={props.image1} alt="" />
          <div className='opacity-0 transition-all group-hover:opacity-100 absolute h-full w-full flex items-center justify-center top-0 left-0 bg-black/10'>
            <h2 className='uppercase text-6xl  font-[fontie 1] font-semibold border-3 justify-center -pb-5 -pt-4  px-5 text-white border-white rounded-full'>VIEW PROJECT</h2>
          </div>
          </div>
          
        
        </>
  )
}

export default ProjectCard