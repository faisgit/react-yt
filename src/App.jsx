import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import BottomNavigation from "./components/BottomNavigation";
import { conf } from "../conf/config";
import authservices from "./appwrite/auth";

function App() {
  return (
    // <div>
    //   <Header />
    //   <SideBar />
    //   <div className=" md:ml-28 xl:ml-60">
    //     <div className="h-20" />
    //     <Outlet />
    //   </div>
    //   <BottomNavigation />
    // </div>
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

export default App;
