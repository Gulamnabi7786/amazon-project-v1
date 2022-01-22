import React from "react";
import "./VideoAdd.css";
import VideoPlayer from "react-video-js-player";
import Video from "./Video.mp4";
import posterImg from "./posterImg.jpg"

function VideoAdd() {
const videoSrc = Video;
const poster = posterImg;

  return (
    <div className="videoAdd">
      <VideoPlayer 
      src={videoSrc}
      poster={poster}
      width="720"
      height="420"
      playbackRates={[0.5, 3.85, 16]}/>
    </div>
  );
}

export default VideoAdd;
