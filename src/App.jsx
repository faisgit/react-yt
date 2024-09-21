import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import BottomNavigation from "./components/BottomNavigation";
import { conf } from "../conf/config";
import { loginWithGoogle, logoutUser, getUser } from './appwrite/auth'
import { TextContext } from "./context/TextContext";

function App() {
  // const [user , setUser] =  useState(null)
  // const {user, setUser} =  useContext(TextContext)
  // useEffect(() => {
  //   const checkUser =  async () =>{
  //     try {
  //       const userData =  await getUser()
  //       setUser(userData)
  //     } catch (error) {
  //       setUser(null)
  //     }
  //   }
  //   checkUser()
  // },[])
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


    // <div>
    //  {
    //   user ? (
    //     <>
    //      <p>Welcome, {user.name}!</p>
    //       <img src={user.avatar} alt="" />
    //       <button onClick={logoutUser}>Logout</button>
    //     </>
    //   ) : (
    //     <>
    //       <button onClick={loginWithGoogle}>Login with Google</button>
    //     </>
    //   )
    //  }
    // </div>
  )
}

export default App;
