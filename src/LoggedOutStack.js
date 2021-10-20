import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const LoggedOutStack = () => {
  return (
    <div className="app_container">
      <Switch>
        <Route path="/login">
          <Login pTitle="Login | Fahmily" />
        </Route>
        <Route path="/register">
          <Register pTitle="Register | Fahmily" />
        </Route>
      </Switch>
    </div>
  );
};

export default LoggedOutStack;
