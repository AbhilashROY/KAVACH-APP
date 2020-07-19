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
        pathname: `/search/reports/${props.rowData.userId}`,
        state: { value: JSON.stringify(props) },
      }}
    >
      <Card style={{ margin: `20px 80px 20px 80px` }}>
        <div className="root">
          <CardContent className="contentReports">
            <h4>
              <strong>Title: </strong> {props.rowData.title}
            </h4>
            <h4>
              <strong>Reported on: </strong> {props.rowData.userId}/
              {props.rowData.id % 10}/2019
            </h4>
            <h4>
              <strong>Active: </strong> false
            </h4>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default SearchReports;
