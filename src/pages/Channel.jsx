import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; 
import { conf } from "../../conf/config";
function Channel() {
  const { id } = useParams();
  const apiKey = conf.youtubeApiKey
  const channelDetails = async (id) => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  };

  const channelVideos = async (id) => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${id}&type=video&key=${apiKey}`
      const response = await fetch(url)
      const data =  await response.json()
      console.log('Channel Video')
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  const channelPlaylist =  async (id) => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${id}&key=${apiKey}`
      const response = await fetch(url)
      const data =  await response.json()
      console.log('Channel Playlist')
      console.log(data)
    } catch (error) {
      console.error(error);
      
    }
  }

  const channelCommunityPost = async (id) =>{
    try {
      const url  = `https://www.googleapis.com/youtube/v3/community?part=snippet&channelId=${id}&key=${apiKey}`
      const response = await fetch(url)
      const data  = await response.json()
      console.log('Channel Community Post');
      console.log(data);
      
      
    } catch (error) {
      console.error(error);
      
    }
  }

  useEffect(() => {
    channelDetails(id);
    channelVideos(id)
    channelPlaylist(id)
    channelCommunityPost(id)
  }, [id]);
  return <div>{id}</div>;
}

export default Channel;
