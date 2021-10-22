import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
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
      <NavBar />
      <Switch>
        <Route path="/activity">
          <ActivityStack />
        </Route>
      </Switch>
    </div>
  );
};

export default LoggedInStack;
