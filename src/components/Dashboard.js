import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GeoChart from "./GeoChart";
import data from "./indiaMap.json";
import Graph from "./Graph";

function Dashboard() {
  const [property, setProperty] = useState("population");
  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welcome" className="container">
          <GeoChart data={data} property={property} />
        </div>
      </div>
      <div id="wrapper3">
        <div id="portfolio" className="container">
          <Graph />
        </div>
      </div>
      <div id="footer" className="container"></div>
    </React.Fragment>
  );
}

export default Dashboard;
