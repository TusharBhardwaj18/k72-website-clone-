import React from 'react'
import Video from './video'

const homebottom = () => {
  return (
    <div className = " font-[fontie 1] text-center">
      <div className = 'text-[10vw] justify-center flex items-center  uppercase leading-[8vw] ' >THE SPARK FOR</div>
      <div className = 'text-[9.5vw]  justify-center flex items-center  gap-[2vw] uppercase leading-[8vw] ' >ALL 
        <div className = 'h-[10vw] w-[18vw] rounded-full overflow-hidden dynamic-video-capsule  inline-block' >
          <Video />
          </div>
          <span>THINGS</span>
          </div>
      <div className = 'text-[9.5vw] justify-center flex items-center  uppercase leading-[8vw] ' >CREATIVE</div>
    </div>
  )
}

export default homebottom