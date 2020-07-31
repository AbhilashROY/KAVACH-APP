import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator } from "d3";
import useResizeObserver from "./useResizeObserver";
import "../App.css";
import { Router, Route, useHistory } from "react-router-dom";
import Demographics from "./Demographics";
import axios from "axios";

function GeoChart({ data, property }) {
  const history = useHistory({ forceRefresh: true });
  const svgRef = useRef();
  const wrapperRef = useRef();
  const myref = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedStateForInfo, setSelectedStateForInfo] = useState(null);
  const [reports, setReports] = useState([]);
  let color = ["#120a8f", " #95B9C7", "#6960EC", "#151B54", "#646D7E"];
  const selectedColor = ["#FF6347", "#FFFFFF"];
  let i = 0;

  useEffect(() => {
    const svg = select(svgRef.current);
    const json2array = (json) => {
      let result = [];
      let keys = Object.keys(json);
      keys.forEach(function (key) {
        result.push(json[key]);
      });
      return result;
    };

    axios({
      method: "GET",
      url: `https://kavach-f5931.firebaseio.com/reports.json`,
    }).then((res) => {
      setReports(json2array(res.data));
    });

    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const projection = geoMercator()
      .fitSize([width, height], selectedStateForInfo || data)
      .precision(100);

    const pathGenerator = geoPath().projection(projection);
    const clickHandler = (d, e) => {
      if (d !== null) history.push(`/dashboard/${d.properties.name}`);
      if (d === e) history.push(`/dashboard`);
      else {
        myref.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    };
    // render each state
    svg
      .selectAll(".state")
      .data(data.features)
      .join("path")
      .on("mouseover", (feature) => {
        setSelectedState(selectedState === feature ? null : feature);
      })
      .on("mouseout", (feature) => {
        setSelectedState(selectedState === feature ? null : feature);
      })
      .on("click", (feature) => {
        setSelectedStateForInfo(
          selectedStateForInfo === feature ? null : feature
        );
        setSelectedState(selectedState === feature ? null : feature);
        clickHandler(feature, selectedStateForInfo);
      })
      .attr("class", "state")
      .transition()
      .style("fill", function (d) {
        i++;
        return color[i % 5];
      })
      .attr("d", (feature) => pathGenerator(feature));

    svg
      .selectAll(".state2")
      .data([selectedStateForInfo])
      .join("path")
      .on("click", (feature) => {
        setSelectedStateForInfo(
          selectedStateForInfo === feature ? null : feature
        );
        clickHandler(feature, selectedStateForInfo);
      })
      .attr("class", "state2")
      .transition()
      .style("fill", function () {
        return selectedColor[0];
      })
      .attr("d", (feature) => pathGenerator(feature));
    // render text
    svg
      .selectAll(".label1")
      .data([selectedState])
      .join("text")
      .attr("class", "label1")
      .text(
        (feature) =>
          feature && "State: " + feature.properties.name.toLocaleString()
      )
      .attr("x", 10)
      .attr("y", 25);

    svg
      .selectAll(".label2")
      .data([selectedState])
      .join("text")
      .attr("class", "label2")
      .text(
        (feature) =>
          feature &&
          "Population: " + feature.properties[property].toLocaleString()
      )
      .attr("x", 10)
      .attr("y", 45);

    svg
      .selectAll(".label4")
      .data([selectedState])
      .join("text")
      .attr("class", "label4")
      .text((feature) => {
        let count = 0;
        if (feature !== null) {
          reports.map((report) => {
            if (report.State === feature.properties.name) count++;
          });
        }
        return feature && "Crime: " + count.toLocaleString();
      })
      .attr("x", 10)
      .attr("y", 65);

    svg
      .selectAll(".label3")
      .data([selectedStateForInfo])
      .join("text")
      .attr("class", "label3")
      .text((feature) => feature && feature.properties.name.toLocaleString())
      .attr("x", 400)
      .attr("y", 25);
  }, [data, dimensions, property, selectedState, selectedStateForInfo]);

  return (
    <React.Fragment>
      <div id="wrapper2">
        <div id="welcome" className="container">
          <div
            ref={wrapperRef}
            style={({ marginBottom: "2rem" }, { marginTop: "2rem" })}
          >
            <svg ref={svgRef}></svg>
          </div>
        </div>
      </div>
      <div ref={myref}></div>
      <Router history={history} forceRefresh={true}>
        <Route path="/dashboard/:state_name" exact component={Demographics} />
      </Router>
      <div id="footer" className="container"></div>
    </React.Fragment>
  );
}

export default GeoChart;
