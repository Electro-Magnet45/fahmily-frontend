import React, { useEffect, useState } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import FrameBar from "./components/FrameBar";
import Toast from "./components/Toast";
import RouteHandler from "./RouteHandler";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("registered")) setIsLoggedIn(true);
    window.addEventListener("storage", () => {
      if (localStorage.getItem("registered")) setIsLoggedIn(true);
    });
  }, []);

  return (
    <div className="base">
      <FrameBar />
      <Toast />
      <HashRouter>
        <RouteHandler isLoggedIn={isLoggedIn} />
      </HashRouter>
    </div>
  );
}

export default App;
