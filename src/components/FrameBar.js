import React, { useState } from "react";
import "./FrameBar.css";
import { X, App, AppIndicator, Dash } from "@styled-icons/bootstrap";

const { ipcRenderer } = window.require("electron");
const ipc = ipcRenderer;

const FrameBar = () => {
  const [winStatus, setWinStatsus] = useState("Maximize");
  const miniWindFunc = () => {
    ipc.send("minimizeApp");
  };
  const maximizeRestoreFunc = () => {
    ipc.send("maximizeRestoreApp");
    const newStatus = winStatus === "Maximize" ? "Restore" : "Maximize";
    setWinStatsus(newStatus);
  };
  const closeWindFunc = () => {
    ipc.send("closeApp");
  };

  return (
    <div className="frameBar">
      <div className="frameBar_container">
        <div className="frameBar-cont_btns">
          <div
            className="frameBar-cont-btn_div"
            title="Minimize"
            onClick={miniWindFunc}
          >
            <Dash />
          </div>
          <div
            className="frameBar-cont-btn_div"
            title={winStatus}
            onClick={maximizeRestoreFunc}
          >
            {winStatus === "Restore" ? <AppIndicator /> : <App />}
          </div>
          <div
            className="frameBar-cont-btn_div"
            title="Close"
            onClick={closeWindFunc}
          >
            <X />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameBar;
