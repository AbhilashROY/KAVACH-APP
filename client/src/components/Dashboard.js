import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GeoChart from "./GeoChart";
import data from "./indiaMap.json";

const StyledBurger = styled.div`
  float: left;
  height: 35px;
  width: 45px;
  cursor: pointer;

  div {
    width: 30px;
    height: 3px;
    border-radius: 20px;
    margin: 7px 7px;
    transition: 0.5s;
    background-color: white;
    transition: 0.5s ease-in-out;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const Menu = styled.ul`
  overflow: hidden;
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  text-align: center;
  transition: 0.5s ease-in-out;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.17em;
  text-decoration: none;
  height: ${({ open }) => (open ? "118px" : "0px")};
`;

const Nav = styled.nav`
  padding: 10px;
  display: inline-block;
  text-align: center;
  background-color: #4a4349;
  color: white;
  width: 100%;
  transition: 0.5s ease-in-out;
`;

function Dashboard() {
  const [property, setProperty] = useState("population");
  const [open, setOpen] = useState(false);
 
  const ulstyle = {
    display: 'inline-flex',
    margin: '0',
  }

  return (
    <React.Fragment>
      {/* <div id="wrapper2">
        <Menu open={open}>
          <Link to="/predictions" style={{ textDecoration: "none" }}>
            <li className="menuList">Predictions</li>
          </Link>
          <Link to="/heatmap" style={{ textDecoration: "none" }}>
            <li className="menuList">Heatmap</li>
          </Link>
        </Menu>
        <Nav open={open}>
          <StyledBurger
            open={open}
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div />
            <div />
            <div />
          </StyledBurger>
        </Nav>
      </div> */}
      <div  id="wrapper2">
        <Nav>
          <ul style = {ulstyle}>
            <Link to="/predictions" style={{ textDecoration: "none" }}>
                <li className="menuList">Predictions</li>
            </Link>
            <Link to="/heatmap" style={{ textDecoration: "none" }}>
                <li className="menuList">Heatmap</li>
            </Link>     
          </ul>
        </Nav>
      </div>

      <GeoChart data={data} property={property} />
      
    </React.Fragment>
  );
}

export default Dashboard;
