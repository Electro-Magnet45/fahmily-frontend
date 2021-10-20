import React, { useState } from "react";
import "./NavBar.css";
import app_icon from "../assets/logo.png";
import {
  Search,
  Grid as GridOutline,
  Megaphone as MegaphoneOutline,
  Lightbulb as LightBulbOuline,
  Calendar2Check as CalendarOutline,
  Chat as ChatOutline,
  Bell as BellOutline,
  GridFill,
  MegaphoneFill,
  LightbulbFill,
  Calendar2CheckFill,
  ChatFill,
} from "@styled-icons/bootstrap";

const NavBar = () => {
  const [pathName, setPathName] = useState("");

  return (
    <div className="navBar">
      <div className="navBar_container">
        <div className="navBar-cont_icon">
          <img src={app_icon} alt="" />
        </div>
        <div className="navBar-cont_links">
          <div className="navBar-cont_link navBar-cont_search">
            <Search />
          </div>
          <div className="navBar-cont_link">
            {pathName === "/home" ? <GridFill /> : <GridOutline />}
          </div>
          <div className="navBar-cont_link">
            {pathName === "/announcements" ? (
              <MegaphoneFill />
            ) : (
              <MegaphoneOutline />
            )}
          </div>
          <div className="navBar-cont_link">
            {pathName === "/new-suggestion" ? (
              <LightbulbFill />
            ) : (
              <LightBulbOuline />
            )}
          </div>
          <div className="navBar-cont_link">
            {pathName === "/events" ? (
              <Calendar2CheckFill />
            ) : (
              <CalendarOutline />
            )}
          </div>
          <div className="navBar-cont_link">
            {pathName === "/chat" ? <ChatFill /> : <ChatOutline />}
          </div>
        </div>
        <div className="navBar-cont_profile">
          <BellOutline />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
