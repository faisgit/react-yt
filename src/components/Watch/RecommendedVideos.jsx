import React, { useEffect, useState } from "react";
import { conf } from "../../../conf/config";
import RecommendedVideosCard from "./RecommendedVideosCard";
import { useParams } from "react-router-dom";

function RecommendedVideos({ videoId }) {
  const [categoryId, setCategoryId] = useState(null);
  const [data, setData] = useState([]);
  
  const getVideoCategoryId = async (videoId) => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id=${videoId}&key=${conf.youtubeApiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      setCategoryId(data.items?.[0]?.snippet?.categoryId);
    } catch (error) {
      console.error("Error fetching video category ID:", error);
    }
  };

  const suggestVideos = async (categoryId) => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${categoryId}&key=${conf.youtubeApiKey}`;
      const response = await fetch(url);
      const responseData = await response.json();
      setData(responseData.items || []); // Ensure data.items is an array
    } catch (error) {
      console.error("Error fetching suggested videos:", error);
    }
  };

  useEffect(() => {
    if (videoId) {
      getVideoCategoryId(videoId);
    }
  }, [videoId]);

  useEffect(() => {
    if (categoryId) {
      suggestVideos(categoryId);
    }
  }, [categoryId]);

  console.log(data)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center mb-20">
      {data.map((video) => (
        <RecommendedVideosCard key={video.id.videoId} data={video} />
      ))}
    </div>
  );
}

export default RecommendedVideos;
