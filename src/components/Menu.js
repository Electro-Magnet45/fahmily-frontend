import React, { useEffect } from "react";
import "./Menu.css";
import { useLocation } from "react-router";
import man_1 from "../assets/man_1.png";
import { Bell, QuestionCircle, Gear } from "@styled-icons/bootstrap";

const Menu = () => {
  const location = useLocation();

  useEffect(() => {
    const elem = document.getElementById("app-cont_test");
    const elem2 = document.getElementById("menu_head");
    elem.addEventListener(
      "scroll",
      () => {
        console.log(elem.scrollTop > 40);
        if (elem.scrollTop > 40) {
          elem2.classList.add("scrollAnime");
        } else {
          elem2.classList.remove("scrollAnime");
        }
      },
      { passive: true }
    );
    return () => elem.removeEventListener("scroll");
  }, []);

  return (
    <div className="menu">
      <h1 id="menu_head">
        {location.pathname.split("/")[2].replace(/./, (c) => c.toUpperCase())}
      </h1>
      <div className="menu_container">
        <div className="menu-cont_item">
          <Bell />
          <div className="menu-item_bell"></div>
        </div>
        <div className="menu-cont_item">
          <QuestionCircle />
        </div>
        <div className="menu-cont_item">
          <Gear />
        </div>
        <div className="menu-cont_item profile">
          <img src={man_1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
