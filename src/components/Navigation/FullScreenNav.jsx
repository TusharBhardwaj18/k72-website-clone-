import React from 'react'

const FullScreenNav = () => {
  return (
    <div id = 'fullscreennav' className=' text-white  h-full py-30 w-full absolute bg-amber-900'>
        <div className=''>
            <div className='link border-t-1 border-white relative ' >
                <h1 className='font-[fontie 2] text-[9vw] h-23 leading-[0] pt-10 text-center uppercase'>WORK</h1>
            <div className='absolute text-black flex top-0 bg-[#D3FD50]'>
                <div className='moveX flex  items-center'>
                <h2 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h2>
                <img className = 'h-20  rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h3 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 py-2 text-center uppercase'>SEE EVERYTHING</h3>
                <img className = 'h-20 rounded-full shrink-0 w-50 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
            </div>
            </div>
             <div className='link border-y-1 border-white relative ' >
                <h1 className='font-[fontie 2] text-[9vw] h-23 leading-[0] pt-10 text-center uppercase'>AGENCy</h1>
            <div className='absolute flex top-0 bg-[#D3FD50]'>
                {/* <div className='flex  items-center'>
                <h2 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 text-center uppercase'>SEE EVERYTHING</h2>
                <img className = 'h-30 rounded-full shrink-0  w-96 object-cover' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
                    <h3 className='whitespace-nowrap font-[fontie 2] text-[8vw] leading-[0.8] pt-2 text-center uppercase'>SEE EVERYTHING</h3>
                <img className = 'h-36 rounded-full shrink-0  w-96 object-cover' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
            </div> */}
            </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default FullScreenNav