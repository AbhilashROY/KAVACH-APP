import React, { useState } from "react";
import LineDemo from './LineDemo';
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Predictions() {
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    backgroundColor: 'white'
  };

  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welcome" className="container">
          <h2>Predictions</h2>
        </div>
      </div>
      {/* <div id="wrapper3">
        <div id="portfolio" className="container"></div>
      </div> */}
      <div style={styles}>
        <LineDemo/>
      </div>
      <div id="footer" className="container"></div>
    </React.Fragment>
  );
}

export default Predictions;
