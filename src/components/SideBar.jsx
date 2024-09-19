import {
  EmojiEventsOutlined,
  GamesOutlined,
  HistoryOutlined,
  HomeOutlined,
  LiveTvOutlined,
  LocalMallOutlined,
  MovieOutlined,
  MusicNoteOutlined,
  PlaylistPlayOutlined,
  RecentActorsOutlined,
  SubscriptionsOutlined,
  ThumbUpAltSharp,
  VideoLibraryOutlined,
  WatchLaterOutlined,
  WhatshotRounded,
  WifiTetheringOutlined,
} from "@mui/icons-material";
import React from "react";
import YtshortsLogo from "./../assets/yt-shorts-logo.png";
function SideBar() {
  return (
    <div className=" hidden  md:block fixed w-28 xl:w-60 h-screen bg-white border-r-2 border-solid border-r-gray-200 mt-[4.5rem] overflow-scroll">
      <ul className="flex flex-col gap-3 mt-5 px-3 border-b-2 border-solid border-b-gray-200 mx-2 pb-1">
        <li className="flex iteme-center gap-x-2 btn btn-ghost justify-start">
          {" "}
          <HomeOutlined />
          <span className="hidden xl:block">Home</span>
        </li>
        <li className="flex items-center gap-x-2 btn btn-ghost justify-start">
          <img src={YtshortsLogo} className="h-5" />
          <span className="hidden xl:block">Shorts</span>
        </li>
        <li className="flex items-center gap-x-2 btn btn-ghost justify-start">
          <SubscriptionsOutlined /> 
          <span className="hidden xl:block">Subscriptions</span>
        </li>
      </ul>
      <ul className="flex flex-col gap-3 mt-5 px-3 border-b-2 border-solid border-b-gray-200 mx-2 pb-1">
        <li></li>
        <li className="flex justify-start items-center btn btn-ghost ">
          <RecentActorsOutlined /> 
          <span className="hidden xl:block">Your Channel</span>
        </li>
        <li className="flex justify-start items-center btn btn-ghost ">
          <HistoryOutlined /> 
          <span className="hidden xl:block">History</span>
        </li>
        <li className="flex justify-start items-center btn btn-ghost ">
          <PlaylistPlayOutlined /> 
          <span className="hidden xl:block">Playlists</span>
        </li>
        <li className="flex justify-start items-center btn btn-ghost ">
          <VideoLibraryOutlined /> 
          <span className="hidden xl:block">Your Videos</span>
        </li>
        <li className="flex justify-start items-center btn btn-ghost ">
          <WatchLaterOutlined /> 
          <span className="hidden xl:block">Watch Later</span>
        </li>
        <li className="flex justify-start items-center btn btn-ghost ">
          <ThumbUpAltSharp /> 
          <span className="hidden xl:block">Liked Videos</span>
        </li>
      </ul>
      <ul className="flex flex-col gap-3 mt-5 px-3 mx-2 pb-1">
        <li className="flex justify-start items-center gap-2 btn btn-ghost">
          <WhatshotRounded /> 
          <span className="hidden xl:block">Trending</span>
        </li>
        <li className="flex justify-start items-center gap-2 btn btn-ghost">
          <LocalMallOutlined /> 
          <span className="hidden xl:block">Shopping</span>
        </li>
        <li className="flex justify-start items-center gap-2 btn btn-ghost">
          <MusicNoteOutlined /> 
          <span className="hidden xl:block">Music</span>
        </li>
        <li className="flex justify-start items-center gap-2 btn btn-ghost">
          <MovieOutlined /> 
          <span className="hidden xl:block">Movies</span>
        </li>
        <li className="flex justify-start items-center gap-2 btn btn-ghost">
          <LiveTvOutlined /> 
          <span className="hidden xl:block">Live</span>
        </li>
        <li className="flex justify-start items-center gap-2 btn btn-ghost">
          <GamesOutlined /> 
          <span className="hidden xl:block">Gaming</span>
        </li>
        <li className="flex justify-start items-center gap-2 btn btn-ghost">
          <EmojiEventsOutlined /> 
          <span className="hidden xl:block">Sports</span>
        </li>
        <li className="flex justify-start items-center gap-2 btn btn-ghost">
          <WifiTetheringOutlined /> 
          <span className="hidden xl:block">Podcast</span>
        </li>
      </ul>
      <div className="h-20" />
    </div>
  );
}

export default SideBar;
