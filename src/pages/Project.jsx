import React from 'react'

const Project = () => {
  return (
    <div className='p-4'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[fontie -2] text-[9.5vw] uppercase'>WORK</h2>
      </div>
      <div className='-mt-20 '>
        <div className='w-full  h-[700px] mb-4 flex gap-4  '>
          <div className='w-1/2 transition-all relative rounded-none hover:rounded-[50px] overflow-hidden h-full'>
          <img className='h-full w-full object-cover'   src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93" alt="" />
          <div className='absolute h-full w-full flex items-center justify-center top-0 left-0 bg-black/10'>
            <h2 className='uppercase text-4xl font-[fontie 1] border-3 pt-4  px-4 text-white border-white  rounded-full'>VIEW PROJECT</h2>
          </div>
          </div>
        
        </div>
       
      </div>
    </div>
  )
}

export default Project