import React from "react";
import { useNavigate } from "react-router-dom";

function SearchResultCard({ data }) {
  const { snippet, id } = data;
  const title = snippet.title;
  const channelTitle = snippet.channelTitle;
  const thumbnails = snippet.thumbnails.high.url;
  const description = snippet.description;
  const videoId = id.videoId;
  const channelIcon = data.channelIcon;
  const viewCount = data.viewCount;

  function formatViewCount(viewCount) {
    if (viewCount < 1000) {
      return viewCount + " views";
    } else if (viewCount < 1000000) {
      return (viewCount / 1000).toFixed(1) + "K views";
    } else if (viewCount < 1000000000) {
      return (viewCount / 1000000).toFixed(1) + "M views";
    } else {
      return (viewCount / 1000000000).toFixed(1) + "B views";
    }
  }

  const formattedViewCount = formatViewCount(viewCount);
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-3 mx-3 my-3 cursor-pointer"
      key={(Math.random() * 16).toString(16).slice(2,10)}
      onClick={() => navigate(`/watch/${videoId}`)}
    >
      <img src={thumbnails} alt="" className="h-60 rounded-xl" />
      <div className=" hidden md:flex flex-col gap-3  ">
        <h4 className="font-semibold text-xl ">{title}</h4>
        <p className="text-sm font-semibold">{formattedViewCount}</p>
        <div className="flex items-center gap-2">
          <img src={channelIcon} alt="" className="w-6 rounded-full" />
          <p className="text-sm font-semibold">{channelTitle}</p>
        </div>
        <p className="text-xs font-semibold">{description}</p>
      </div>

      <div className=" flex md:hidden items-start  w-96 gap-4 ml-4">
        <img
          src={channelIcon}
          alt=""
          className="w-7 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{title}</p>
          <p className="text-sm ">
            {" "}
            {channelTitle} • {formattedViewCount}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchResultCard;
