import React from "react";
import ReactPlayer from "react-player/youtube";
function VideoPlayer({ id }) {
  return (
    <div className=" h-56 w-[100%] md:w-auto md:h-96 xl:h-[30rem]">
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls={true}
        height={"100%"}
        width={"100%"}
        className="md:px-10"
      />
    </div>
  );
}

export default VideoPlayer;
