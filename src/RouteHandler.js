import React, { useEffect } from "react";
import "./App.css";
import { useHistory, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoggedInStack from "./LoggedInStack";
import LoggedOutStack from "./LoggedOutStack";

const RouteHandler = ({ isLoggedIn }) => {
  const history = useHistory();
  const lPathName = useLocation().pathname;
  useEffect(() => {
    if (isLoggedIn) return history.replace("/home");
    history.push("/login");
  }, [isLoggedIn]);

  return (
    <div className="app">
      <Helmet>
        <title>
          {lPathName
            ? lPathName
                .substring(lPathName.lastIndexOf("/") + 1, lPathName.length)
                .replace(/^./, (str) => str.toUpperCase())
            : ""}{" "}
          | Fahmily
        </title>
      </Helmet>
      {isLoggedIn ? <LoggedInStack /> : <LoggedOutStack />}
    </div>
  );
};

export default RouteHandler;
