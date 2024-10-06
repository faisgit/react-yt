import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import BottomNavigation from "./components/BottomNavigation";
function App() {
 
  return (
    <div>
      <Header />
      <SideBar />
      <div className=" md:ml-28 xl:ml-60">
        <div className="h-20" />
        <Outlet />
      </div>
      <BottomNavigation />
    </div>
   
  );
}

export default App;
