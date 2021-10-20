import React, { useState } from "react";
import "./App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import LoggedInStack from "./LoggedInStack";
import LoggedOutStack from "./LoggedOutStack";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            {isLoggedin ? <Redirect to="/home" /> : <Redirect to="/login" />}
          </Route>
        </Switch>
        {isLoggedin ? <LoggedInStack /> : <LoggedOutStack />}
      </HashRouter>
    </div>
  );
}

export default App;
