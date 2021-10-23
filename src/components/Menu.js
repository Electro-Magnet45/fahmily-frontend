import React from "react";
import "./Menu.css";
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
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsJ774VL7RjYJGKgiFM2E1DmvLT3NeldlBWA&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
