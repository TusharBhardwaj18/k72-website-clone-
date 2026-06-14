import React from "react";
import Video from "../components/home/video"
import Homebottom from "../components/home/homebottom"
import Homeherotop from "../components/home/homeherotop"

const Home = () => {
  return (
    <div>
      <div className= 'w-screen h-screen fixed'>
        <Video />
      </div>
      <div className = ' w-screen h-screen relative flex flex-col justify-between' >
        <Homebottom />
        <Homeherotop />
      </div>
    </div>
  )
};

export default Home;
