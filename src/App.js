import React, { useState } from "react";
import "./App.css";
import Darkmode from "darkmode-js";
import Home from "./components/Home";
import Profiles from "./components/Profiles";
import Reports from "./components/Reports";
import Notifications from "./components/Notifications";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Report from "./components/Report";
import Predictions from "./components/Predictions";
import Heatmap from "./components/Heatmap";
var options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  autoMatchOsTheme: true, // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profiles" component={Profiles} />
          <Route path="/reports" component={Reports} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/dashboard" component={Dashboard} />
          <Route
            exact
            path="/search/profiles/:first_name"
            component={Profile}
          />
          <Route exact path="/search/reports/:userId" component={Report} />
          <Route path="/heatmap" exact component={Heatmap} />
          <Route path="/predictions" exact component={Predictions} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
