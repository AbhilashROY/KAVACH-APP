import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import image1 from "../images/cop_lady.jpg";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";

const SearchProfile = (props) => {
  return (
    <Link
      to={{
        pathname: `/search/profiles/${props.rowData.first_name}`,
        state: { value: JSON.stringify(props) },
      }}
    >
      <Card
        style={{ margin: `20px 80px 20px 80px` }}
        onClick={() => props.handleClick(props.rowData)}
      >
        <div className="root">
          <img src={image1} style={{ width: `150px` }} />
          <div>
            <CardContent className="contentProfile">
              <div className="column1">
                <h3>
                  <strong>Name: </strong> {props.rowData.first_name}{" "}
                  {props.rowData.last_name}
                </h3>
                <h4>
                  <strong>Station: </strong> {props.rowData.team.city}{" "}
                  {props.rowData.team.division} {props.rowData.team.id}
                </h4>
                <h4>
                  <strong>Phone: </strong> {props.rowData.id}
                  {props.rowData.team.id}
                </h4>
              </div>
              <div className="column2"></div>
              <div className="column4">
                <h3>
                  <strong>Active Cases: </strong> {props.rowData.id}
                </h3>
                <h4>
                  <strong>Rejected Cases: </strong> {props.rowData.team.id}
                </h4>
                <h4>
                  <strong>Completed Cases: </strong> 8
                </h4>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default SearchProfile;
