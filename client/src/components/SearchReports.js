import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";

const SearchReports = (props) => {
  return (
    <Link
      to={{
        pathname: `/search/reports/${props.rowData.timestamp}`,
        state: { value: JSON.stringify(props) },
      }}
      style={{ textDecoration: `none` }}
    >
      <Card style={{ margin: `20px 80px 20px 80px` }}>
        <div className="reportRoot">
          <span className="reportHead">
            <span className="icon icon-list" style={{ float: `left` }} />
          </span>
          <span>
            <CardContent>
              <div className="contentReports">
                <div className="spacing">
                  <span style={{ paddingRight: `100px` }}>
                    <strong>TITLE: </strong> {props.rowData.crime_type}{" "}
                  </span>
                  <span style={{ paddingRight: `40px` }}>
                    <strong>REPORTED ON: </strong> {props.rowData.timestamp}
                  </span>
                  <strong>STATUS: </strong> {props.rowData.report_status}
                </div>
                <div className="spacing">
                  <strong>DESCRIPTION: </strong> {props.rowData.description}
                </div>
              </div>
            </CardContent>
          </span>
        </div>
      </Card>
    </Link>
  );
};

export default SearchReports;
