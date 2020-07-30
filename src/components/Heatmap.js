import React, { useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Heatmap() {
  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welcome" className="container">
          <h2>Heatmap</h2>
        </div>
      </div>
      <div id="wrapper3">
        <div id="portfolio" className="container"></div>
      </div>
      <div id="footer" className="container"></div>
    </React.Fragment>
  );
}

export default Heatmap;
