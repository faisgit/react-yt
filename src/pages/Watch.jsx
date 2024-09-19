import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import VideoPlayer from "../components/Watch/VideoPlayer";
import VideoDescription from "../components/Watch/VideoDescription";
import { useChannelDetail } from "../custom-hooks/useFetchData";
import RecommendedVideos from "../components/Watch/RecommendedVideos";
function Watch() {
  const { id } = useParams();
  // console.log(id);
  const [details, setDetails] = useState([]);
  const { data, channelDeatil, setData } = useChannelDetail();
  const navigate = useNavigate();
  const videoInfo = async (id) => {
    const apiKey = import.meta.env.VITE_MY_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,id&id=${id}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setDetails(data.items[0]);
  };
  useEffect(() => {
    videoInfo(id);
  }, [id]);
  console.log(details);

  return (
    <>
      <VideoPlayer id={id} />
      <VideoDescription id={id} details={details} />
      <RecommendedVideos videoId={id} />
    </>
  );
}

export default Watch;
