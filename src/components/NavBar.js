import React, { useEffect, useState } from "react";
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
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState("/activity/tasks");

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

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
          <Link to="/home">
            <div className="navBar-cont_link">
              {pathName === "/home" ? <GridFill /> : <GridOutline />}
            </div>
          </Link>
          <div className="navBar-cont_link">
            {pathName === "/activity/announcements" ? (
              <MegaphoneFill />
            ) : (
              <MegaphoneOutline />
            )}
          </div>
          <div className="navBar-cont_link">
            {pathName === "/activity/new-suggestion" ? (
              <LightbulbFill />
            ) : (
              <LightBulbOuline />
            )}
          </div>
          <Link to="/activity/tasks">
            <div className="navBar-cont_link">
              {pathName === "/activity/tasks" ? (
                <Calendar2CheckFill />
              ) : (
                <CalendarOutline />
              )}
            </div>
          </Link>
          <div className="navBar-cont_link">
            {pathName === "/activity/chat" ? <ChatFill /> : <ChatOutline />}
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
