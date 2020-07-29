import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GeoChart from "./GeoChart";
import data from "./indiaMap.json";

function Dashboard() {
  const [property, setProperty] = useState("population");
  return (
    <React.Fragment>
      <GeoChart data={data} property={property} />
    </React.Fragment>
  );
}

export default Dashboard;
