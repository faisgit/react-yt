import React, { useEffect } from "react";
import {
  useChannelDetail,
  useSubscriberCount,
} from "../../custom-hooks/useFetchData";
import { Link } from "react-router-dom";
function VideoDescription({ details }) {
  const { data, channelDeatil, setData } = useChannelDetail();
  const { count, subscriberCount } = useSubscriberCount();
  const channelId = details?.snippet?.channelId;
  console.log(channelId);
  useEffect(() => {
    channelDeatil(channelId);
    subscriberCount(channelId);
  }, [channelId]);
  console.log(details);
  const channelTitle = details?.snippet?.channelTitle;
  const videoTitle = details?.snippet?.title;
  const videoDescription = details?.snippet?.description;
  const subsCount = count?.[0]?.statistics?.subscriberCount;
  const profileIcon = data?.[0]?.snippet?.thumbnails?.high?.url;
  console.log(profileIcon);

  // console.log(videoDescription);

  function formatSubsCount(subsCount) {
    if (subsCount < 1000) {
      return subsCount;
    } else if (subsCount < 1000000) {
      return (subsCount / 1000).toFixed(1) + "K";
    } else if (subsCount < 1000000000) {
      return (subsCount / 1000000).toFixed(1) + "M";
    } else {
      return (subsCount / 1000000000).toFixed(1) + "B";
    }
  }

  const formattedSubsCount = formatSubsCount(subsCount);
  console.log(formattedSubsCount);

  return (
    <Link to={`/channel/${channelId}`} className="px-3 mt-2">
      <h3 className="font-semibold  text-xl mb-2">{videoTitle}</h3>
      <div className="flex items-center gap-1">
        <img
          src={profileIcon}
          alt="image not found!"
          className="w-10 rounded-full"
        />
        <div>
          <p className="font-semibold">{channelTitle}</p>
          <p className="text-sm ">{formattedSubsCount} Subscribers</p>
        </div>
      </div>
    </Link>
  );
}

export default VideoDescription;
