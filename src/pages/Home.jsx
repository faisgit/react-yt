import React,{useEffect, useState} from 'react'
import HomeVideoCard from '../components/Home/HomeVideoCard'
import { conf } from '../../conf/config'
function Home() {
  const [data,setData] = useState([])
  const fetchData = async () => {
    try {
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&key=${conf.youtubeApiKey}&maxResults=1000`
      const response = await fetch(url)
      const responseData = await response.json()
      setData(responseData.items)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])
  console.log(data);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 justify-items-center">
      {
        data.map((data) => (
          <HomeVideoCard data={data} />
        ))
      }
      <div className="h-20" />
    </div>
  )
}

export default Home
