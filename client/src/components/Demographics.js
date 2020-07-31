import React from "react";
import Graph from "./Graph";
import PieChart from "./PieChart";
import ColumnChart from "./ColumnChart";
const Demographics = (props) => {
  const fetched = props.location.pathname;
  const state = fetched.substring(11);
  return (
    <React.Fragment>
      <div id="wrapper3">
        <h1 style={{ textTransform: `uppercase` }}>{state}</h1>
        <div id="portfolio" className="container">
          <div style={({ margin: `30px` }, { float: `right` })}>
            <select style={{ padding: `5px` }}>
              <option value="All Crimes">All Crimes</option>
              <option value="Murder">Murder</option>
              <option value="Kidnapping/Abduction">Kidnapping/Abduction</option>
              <option value="Robbery">Robbery</option>
              <option value="Rape">Rape</option>
              <option value="Accident">Accident</option>
              <option value="Theft">Theft</option>
              <option value="Riot">Riot</option>
              <option value="Eve Teasing">Eve Teasing</option>
              <option value="Domestic Violence">Domestic Violence</option>
              <option value="Fight">Fight</option>
              <option value="Drug/Narcotic Violations">
                Drug/Narcotic Violations
              </option>
              <option value="Others">Others</option>
            </select>
          </div>

          <Graph />
        </div>
      </div>
      <div id="wrapper4" className="container">
        <div id="wrapper2" className="dashboardSearchBar">
          <div className="container">
            <select style={{ padding: `5px` }}>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
            </select>
          </div>
        </div>{" "}
        <span style={{ float: `left` }}>
          <PieChart />
        </span>
        <span style={{ float: `right` }}>
          <ColumnChart />
        </span>
      </div>

      <div id="footer" className="container">
        Contact us
      </div>
    </React.Fragment>
  );
};

export default Demographics;
