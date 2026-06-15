import React from 'react'

const Video = () => {
  return (
    <div className = 'h-full w-full '>
        <video className = 'h-full w-full object-cover' autoPlay loop muted playsInline src = "https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1781549250~exp=1781552850~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=514a8dd1f4dca6189d3db13c7caa16987bbd5d910ff17665eb7741e144ff79b3&r=dXMtZWFzdDE%3D" > </video>
    </div>
  )
}

export default Video