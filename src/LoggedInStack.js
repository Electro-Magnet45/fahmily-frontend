import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Tasks from "./InPages/Tasks";

const ActivityStack = () => {
  return (
    <Switch>
      <Route path="/activity/tasks">
        <Tasks />
      </Route>
    </Switch>
  );
};

const LoggedInStack = () => {
  return (
    <div className="app_container">
      <Menu />
      <NavBar />
      <div className="app-cont_routes">
        <Switch>
          <Route path="/activity">
            <ActivityStack />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default LoggedInStack;
