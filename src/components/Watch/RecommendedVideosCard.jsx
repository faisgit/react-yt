import React, { useState } from 'react'
import { conf } from '../../../conf/config'
import { Link } from 'react-router-dom'
function RecommendedVideosCard({data}) {
  const [channelIcon,setChannelIcon] = useState()
  const {snippet} =  data
  const videoTitle =  snippet.title
  const channelTitle =  snippet.channelTitle
  const videoThumbnails =  snippet.thumbnails.high.url
  const channelId =  snippet.channelId
  const id =  data.id.videoId

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

  channelId && getProfileIcon(channelId)
  
  return (
    <Link to={`/watch/${id}`} className='sm:ml-3 mt-5'>
        <img src={videoThumbnails} alt="" className=' sm:h-52 sm:rounded-xl mb-3 w-screen sm:w-auto' />
        <div className='flex items-start gap-2 ml-4'>
            <img src={channelIcon ? channelIcon : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="" className='w-10 rounded-full' />
            <div>
                <p className='font-bold'>{videoTitle.substring(0,20)}...</p>
                <h6 className='font-semibold text-sm'>{channelTitle}</h6>
                <p className='text-sm font-semibold'>10K views • 2 days ago</p>
            </div>
        </div>
    </Link>
  )
}

export default RecommendedVideosCard