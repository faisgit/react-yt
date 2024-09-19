import React, { useContext, useState } from "react";
import youtubeLogo from "./../assets/youtube.png";
import {
  Backspace,
  EmojiEventsOutlined,
  GamesOutlined,
  HistoryOutlined,
  Home,
  KeyboardBackspace,
  LiveTvOutlined,
  LocalMallOutlined,
  Menu,
  MovieOutlined,
  MusicNoteOutlined,
  NotificationsNoneOutlined,
  PlaylistPlayOutlined,
  RecentActorsOutlined,
  Search,
  SubscriptionsOutlined,
  ThumbUpAltSharp,
  VideoCall,
  VideoLibraryOutlined,
  WatchLaterOutlined,
  WhatshotRounded,
  WifiTetheringOutlined,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import YtShortsLogo from "./../assets/yt-shorts-logo.png";
import { TextContext } from "../context/TextContext";
import useFetchData from "../custom-hooks/useFetchData";
function Header() {
  const [hiddenComponents, setHiddenComponents] = useState("hidden");
  const { value, setValue } = useContext(TextContext);
  const {YoutubeFetchData, searchResult} = useFetchData(value)
  const navigate =  useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    YoutubeFetchData()
    console.log(searchResult);
    navigate('/search')
      
  };
  const url  = 'https://www.googleapis.com/youtube/v3/search'
  return (
    <div className="border-b-2 border-solid border-b-black/20 flex  justify-between items-center px-1 md:px-5 py-3 fixed w-screen bg-white ">
      <div className="flex gap-1">
        <div className="drawer md:hidden">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label htmlFor="my-drawer" className="btn btn-ghost drawer-button">
              <Menu />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <h1>Hello World</h1>
            <div className="">
              <h1>Hello world</h1>
            </div>
            <ul className="menu bg-base-200 text-base-content min-h-full w-44 p-4 mb-7">
              {/* Sidebar content here */}
              <li>
                <Link to="">
                  {" "}
                  <Home />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <img src={YtShortsLogo} alt="" className="h-5" />
                  <span>Shorts</span>
                </Link>
              </li>
              <li className="border-b-2 border-solid border-b-gray-200">
                <Link to="">
                  <SubscriptionsOutlined />
                  <span>Subscriptions</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <RecentActorsOutlined />
                  <span>Your Channel</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <HistoryOutlined />
                  <span>History</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <PlaylistPlayOutlined />
                  <span>Playlists</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <VideoLibraryOutlined />
                  <span>Your Videos</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <WatchLaterOutlined />
                  <span>Watch Later</span>
                </Link>
              </li>
              <li className="border-b-2 border-solid border-b-gray-200">
                <Link to="">
                  <ThumbUpAltSharp />
                  <span>Liked Videos</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <WhatshotRounded />
                  <span>Trending</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <LocalMallOutlined />
                  <span>Shopping</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <MusicNoteOutlined />
                  <span>Music</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <MovieOutlined />
                  <span>Movies</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <LiveTvOutlined />
                  <span>Live</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <GamesOutlined />
                  <span>Gaming</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <EmojiEventsOutlined />
                  <span>Sports</span>
                </Link>
              </li>
              <li>
                <Link to="">
                  <WifiTetheringOutlined />
                  <span>Podcast</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to={'/'} className="flex  items-center gap-2 btn btn-ghost ">
          <img
            src={youtubeLogo}
            alt="Logo was not found"
            className=" h-7 md:h-10"
          />
          <div className="flex ">
            <h1 className=" text-md md:text-xl font-bold">YouTube</h1>
          </div>
        </Link>
      </div>
      <div className="">
        <form
          className={` hidden  md:flex items-center`}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="border border-solid border-gray-300 outline-none px-5 py-3  md:w-96 xl:w-[34rem] rounded-l-full "
            placeholder="Search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="btn rounded-none rounded-r-full">
            <Search />
          </button>
        </form>
        <div
          className={`${hiddenComponents} absolute bg-white left-0 top-0   w-screen h-[4.4rem] flex items-center gap-2 md:hidden px-1`}
        >
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setHiddenComponents("hidden")}
          >
            <KeyboardBackspace />
          </button>
          <form
            className={`flex  md:hidden items-center`}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="border border-solid border-gray-300 outline-none px-5 py-3  w-[80vw] rounded-full "
              placeholder="Search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className=" btn btn-circle  btn-ghost  hidden md:block md:btn-sm xl:btn-md">
          <VideoCall />
        </button>
        <button className="btn btn-circle  btn-ghost md:btn-sm xl:btn-md">
          <NotificationsNoneOutlined />
        </button>
        <button className="btn md:btn-sm xl:btn-md bg-blue-500 hover:bg-blue-400 text-white hidden md:block">
          Sign In
        </button>
        <button
          className="btn  btn-ghost btn-circle md:hidden"
          onClick={() => setHiddenComponents("block")}
        >
          <Search />
        </button>
      </div>
    </div>
  );
}

export default Header;
