import React, { useState } from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import RouteHandler from "./RouteHandler";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      <HashRouter>
        <RouteHandler isLoggedIn={isLoggedIn} />
      </HashRouter>
    </div>
  );
}

export default App;
