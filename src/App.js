import React, { useState } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import FrameBar from "./components/FrameBar";
import RouteHandler from "./RouteHandler";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="base">
      <FrameBar />
      <HashRouter>
        <RouteHandler isLoggedIn={isLoggedIn} />
      </HashRouter>
    </div>
  );
}

export default App;
