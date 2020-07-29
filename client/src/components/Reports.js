import React, { Component } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchReports from "./SearchReports";

function Reports() {
  return (
    <React.Fragment>
      <div id="wrapper2" className="profileNavBar">
        <div className="container">
          <div>
            <h1>Reports</h1>
          </div>
        </div>
      </div>
      <SearchReports />
      <div id="footer" className="container">
        <div className="title">
          <h2>Get in touch</h2>{" "}
        </div>
        <ul className="contact">
          <li>
            <a className="icon icon-phone"></a>
          </li>
          <li>
            <a className="icon icon-twitter"></a>
          </li>
          <li>
            <a className="icon icon-youtube-sign"></a>
          </li>
          <li>
            <a className="icon icon-tumblr"></a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default Reports;
