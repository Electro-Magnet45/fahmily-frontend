import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./OutPages/Login";
import Register from "./OutPages/Register";

const LoggedOutStack = () => {
  return (
    <div className="app_container">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
};

export default LoggedOutStack;
