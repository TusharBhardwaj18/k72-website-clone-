import React from 'react'

const Video = () => {
  return (
    <div className = 'h-full w-full '>
        <video className = 'h-full w-full object-cover' autoPlay loop muted playsInline src = "https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1781719596~exp=1781723196~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=024483e91f03a5a9aaab65be2e8ab117b71c831415f806de756306c7614199d6&r=dXMtZWFzdDE%3D" > </video>
    </div>
  )
}

export default Video