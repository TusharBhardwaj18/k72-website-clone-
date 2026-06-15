import React from "react";
import Video from "../components/home/video"
import Homebottom from "../components/home/Homebottom"
import Homeherotop from "../components/home/Homeherotop"

const Home = () => {
  return (
    <div>
      <div className= 'w-screen h-screen fixed'>
        <Video />
      </div>
      <div className = ' w-screen h-screen relative pb-5 overflow-hidden flex flex-col justify-between ' >
        <Homebottom />
        <Homeherotop />
      </div>
    </div>
  )
};

export default Home;
