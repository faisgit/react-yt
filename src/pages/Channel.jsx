import React, { useEffect } from "react";
import { useParams } from "react-router-dom"; 
function Channel() {
  const { id } = useParams();
  const channelDetails = async (id) => {
    const apiKey = import.meta.env.VITE_MY_API_KEY;
    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    channelDetails(id);
  }, [id]);
  return <div>{id}</div>;
}

export default Channel;
