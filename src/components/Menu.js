import React from "react";
import "./Menu.css";
import man_1 from "../assets/man_1.png";
import { Bell, QuestionCircle, Gear } from "@styled-icons/bootstrap";

const Menu = () => {
  return (
    <div className="menu">
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
