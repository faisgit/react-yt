import React, { useState } from "react";
import { conf } from "../../../conf/config";
import { Link } from "react-router-dom";
function HomeVideoCard({data}) {
  const [channelIcon, setChannelIcon] = useState('')
  const {snippet, id,statistics}  = data
  const thumbnails =  snippet.thumbnails.high.url
  const title =  snippet.title
  const channelTitle =  snippet.channelTitle
  const viewCount =  statistics.viewCount
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
  const channelId = snippet.channelId
  const getProfileIcon = async (channelId) =>{
    try {
      
      const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${conf.youtubeApiKey}`;
      const response = await fetch(url);
      const responseData = await response.json();
      setChannelIcon(responseData.items[0].snippet.thumbnails.high.url)
    } catch (error) {
      console.error(error);
    }
  }
  getProfileIcon(channelId)

    return (
    <Link to={`/watch/${id}`} className="flex flex-col gap-3 items-start mx-3  my-4">
      <img
        src={ thumbnails ? thumbnails :"https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"}
        alt=""
        className="h-52 rounded-xl "
      />
      <div className="flex  items-start gap-3 ">
        <div className="w-8 rounded-full">
          <img
            // src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            src={channelIcon ? channelIcon : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
            className="rounded-full"
          />
        </div>
        <div>
          <p className="font-bold">{title.substring(0,30)}...</p>
          <h6 className="font-semibold text-sm">{channelTitle}</h6>
          <p className="text-sm font-semibold">{formattedViewCount}</p>
        </div>
      </div>
    </Link>
  );
}

export default HomeVideoCard;
