import {
  AddCircleOutline,
  Home,
  SubscriptionsOutlined,
} from "@mui/icons-material";
import React from "react";
import YtShortsLogo from "./../assets/yt-shorts-logo.png";
function BottomNavigation() {
  return (
    <div className="btm-nav border-t-2 border-solid border-t-gray-200 md:hidden">
      <button className="">
        <Home />
      </button>
      <button>
        <img src={YtShortsLogo} alt="" className="h-5" />
      </button>
      <button>
        <AddCircleOutline />
      </button>
      <button>
        <SubscriptionsOutlined />
      </button>
      <button>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default BottomNavigation;
