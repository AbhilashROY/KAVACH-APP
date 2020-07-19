import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Li = styled.div`
  display: inline-block;
  margin-left: 0.5em;
  padding: 1em 1.5em;
  letter-spacing: 0.2em;
  text-decoration: none;
  font-size: 0.9em;
  font-weight: 600;
  text-transform: uppercase;
  outline: 0;
  transition: 0.5s ease-in-out;
`;

function Navigation() {
  return (
    <div id="header-wrapper">
      <div id="header" className="container">
        <div id="logo">
          <div className="logo"></div>{" "}
        </div>
        <div id="menu">
          <nav className="navbar">
            <NavLink
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/home"
            >
              <Li>Home</Li>
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/profiles"
            >
              <Li>Profiles</Li>
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/reports"
            >
              <Li>Reports</Li>
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/notifications"
            >
              <Li>Notifications</Li>
            </NavLink>
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/dashboard"
            >
              <Li>Dashboard</Li>
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
