import React from "react";
import { Switch, Route } from "react-router-dom";
import useKeyPress from "./useKeyPress";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import Tasks from "./InPages/Tasks";
import Announcements from "./InPages/Announcements";

const ActivityStack = () => {
  return (
    <Switch>
      <Route path="/activity/tasks">
        <Tasks />
      </Route>
      <Route path="/activity/announcements">
        <Announcements />
      </Route>
    </Switch>
  );
};

const LoggedInStack = () => {
  useKeyPress();
  return (
    <div className="app_container">
      <Menu />
      <NavBar />
      <div className="app-cont_routes">
        <div id="app-cont_test" className="app-cont_test">
          <Switch>
            <Route path="/activity">
              <ActivityStack />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default LoggedInStack;
