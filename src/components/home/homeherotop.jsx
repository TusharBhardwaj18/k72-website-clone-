import React from 'react'
import { Link } from 'react-router-dom'

const homeherotop = () => {
  return (
    <div className = 'font-[fontie 2] flex items-center justify-center gap-2 bg-red-500'>
      <Link className = 'text-[6vw] border-5 leading-[6vw] border-white rounded-full  px-8 uppercase'>Projects</Link>
      <Link className = 'text-[6vw] border-5 leading-[6vw] border-white rounded-full px-8  uppercase'>Agence</Link>
    </div>
  )
}

export default homeherotop