import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator } from "d3";
import useResizeObserver from "./useResizeObserver";
import "../App.css";
import { Router, Route, useHistory } from "react-router-dom";
import Demographics from "./Demographics";

/**
 * Component that renders a map of Germany.
 */

function GeoChart({ data, property }) {
  const history = useHistory({ forceRefresh: true });
  const svgRef = useRef();
  const wrapperRef = useRef();
  const myref = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedStateForInfo, setSelectedStateForInfo] = useState(null);
  let color = ["#C2DFFF", " #95B9C7", "#6960EC", "#151B54", "#646D7E"];
  const selectedColor = ["#FF6347"];
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinates on a 2D plane
    const projection = geoMercator()
      .fitSize([width, height], selectedStateForInfo || data)
      .precision(100);

    const pathGenerator = geoPath().projection(projection);
    const clickHandler = (d, e) => {
      history.push(`/dashboard/${d.properties.name}`);
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
        return color[Math.floor(Math.random() * 5)];
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
