import React from 'react'
import { Link }  from 'react-router-dom'


const homeherotop = () => {
  return (
    <div className = 'font-[fontie 2] flex items-center justify-center gap-4 '>
      <div className = 'border-3  hover:border-[#D3FD50] hover:text-[#D3FD50] h-25 flex items-center px-10 border-white rounded-full uppercase '>
      <Link className = 'text-[6vw] ' to='/projects' >Projects</Link>
      </div>
      <div className = 'border-3  hover:border-[#D3FD50] hover:text-[#D3FD50] h-25 flex items-center px-10 border-white rounded-full uppercase ' >
      <Link className = 'text-[6vw] ' to='/agence' >Agence</Link>
      </div>
    </div>
  )
}

export default homeherotop