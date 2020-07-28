import React, { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator, min, max, scaleLinear } from "d3";
import useResizeObserver from "./useResizeObserver";
import "../App.css";

/**
 * Component that renders a map of Germany.
 */

function GeoChart({ data, property }) {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  const [selectedState, setSelectedState] = useState(null);
  let color = ["#C2DFFF", " #95B9C7", "#6960EC", "#151B54", "#646D7E"];
  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);

    // use resized dimensions
    // but fall back to getBoundingClientRect, if no dimensions yet.
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // projects geo-coordinates on a 2D plane
    const projection = geoMercator()
      .fitSize([width, height], data)
      .precision(100);

    const pathGenerator = geoPath().projection(projection);
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
      .attr("class", "state")
      .transition()
      .style("fill", function (d) {
        return color[Math.floor(Math.random() * 5)];
      })
      .attr("d", (feature) => pathGenerator(feature));

    // render text
    svg
      .selectAll(".label")
      .data([selectedState])
      .join("text")
      .attr("class", "label")
      .text(
        (feature) =>
          feature &&
          feature.properties.name +
            ": " +
            feature.properties[property].toLocaleString()
      )
      .attr("x", 10)
      .attr("y", 25);
  }, [data, dimensions, property, selectedState]);

  console.log();
  return (
    <div
      ref={wrapperRef}
      style={({ marginBottom: "2rem" }, { marginTop: "2rem" })}
    >
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default GeoChart;
