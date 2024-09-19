import React, { useContext, useState } from "react";
import { TextContext } from "../context/TextContext";
import { conf } from "../../conf/config";
export default function useFetchData(query) {
  const {setSearchResult, searchResult, } = useContext(TextContext);
  const YoutubeFetchData = () => {
    const handleSearch = async () => {
      try {
        const url = new URL("https://www.googleapis.com/youtube/v3/search");
        url.searchParams.set("part", "snippet");
        url.searchParams.set("q", query);
        url.searchParams.set("type", "video");
        url.searchParams.set("key", import.meta.env.VITE_MY_API_KEY);
        const response = await fetch(url);
        
        const data = await response.json();
        console.log(data.items);
        const channelIds = data.items.map((item) => item.snippet.channelId);
        const channelIcons = await getChannelIcons(channelIds);
        const videoId = data.items.map((items) => items.id.videoId);
        const viewCount = await getVideosView(videoId);
        console.log(data);
        
        setSearchResult(
          data.items.map((item, index) => ({
            ...item,
            channelIcon: channelIcons[index],
            viewCount: viewCount[index],
          }))
        );
        console.log(searchResult);
      } catch (error) {
        console.error(error);
      }
    };

    query.length > 0 && handleSearch();
  };

  const getChannelIcons = async (channelIds) => {
    const url = new URL("https://www.googleapis.com/youtube/v3/channels");
    url.searchParams.set("part", "snippet");
    url.searchParams.set("id", channelIds.join(","));
    url.searchParams.set("key", import.meta.env.VITE_MY_API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    return data.items.map((item) => item.snippet.thumbnails.high.url);
  };

  const getVideosView = async (videosIds) => {
    const url =`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videosIds}&key=${import.meta.env.VITE_MY_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.items.map((items) => items.statistics.viewCount);
  };

  return query.length > 0 && { searchResult, YoutubeFetchData };
}

export const useChannelDetail =  () => {
  const [data, setData ] =  useState({})
  const channelDeatil =  async  (id) => {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${import.meta.env.VITE_MY_API_KEY}`;
    const response =  await fetch(url)
    const responseData =  await response.json()
    setData(responseData.items)
    // console.log(data);
  }
  console.log(data);
  
  return {data, channelDeatil,setData}
}


export const useSubscriberCount =  () => {
  const [count, setCount ] =  useState({})
  const subscriberCount =  async  (id) => {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${id}&key=${import.meta.env.VITE_MY_API_KEY}`;
    const response =  await fetch(url)
    const responseData =  await response.json()
    setCount(responseData.items)
    // console.log(data);
  }
  // console.log(data);
  
  return {count, subscriberCount}
}
export const useIdToRecommendedVideos = (id) => {
  const [data,setData] = useState([])

  const getVideoCategoryId =  async () => {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=id,snippet&id=${id}&key=${conf.youtubeApiKey}`;
    const response  =  await fetch(url)
    const data =  await response.json()
    return data.items[0].snippet.categoryId

  }

  const suggestVideos = async (categoryId) => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoCategoryId=${categoryId}&key=${conf.youtubeApiKey}`;
    const response = await fetch(url);
    const responseData  = await response.json();
    console.log();

    setData(responseData.items)
    
  }
  return {data, getVideoCategoryId, suggestVideos}
};