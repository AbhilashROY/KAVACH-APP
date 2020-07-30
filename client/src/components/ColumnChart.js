import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
  render() {
    const options = {
      axisX: {
        labelFontSize: 10,
      },
      dataPointWidth: 30,
      animationEnabled: true,
      data: [
        {
          // Change type to "doughnut", "line", "splineArea", etc.
          type: "column",
          dataPoints: [
            {
              y: 348421,
              label: "Murder",
              color: "#e5d8b0",
            },
            {
              y: 553455,
              label: "Robbery",
              color: "#ffb367",
            },
            {
              y: 230391,
              label: "Kidnapping/Abduction",
              color: "#f98461",
            },
            {
              y: 430494,
              label: "Drug/Narcotic Violations",
              color: "#d9695f",
            },
            {
              y: 345337,
              label: "Sexual Assault",
              color: "#ac5a41",
            },
            {
              y: 342373,
              label: "Rape",
              color: "#393f63",
            },
            {
              y: 130689,
              label: "Others",
              color: " #747a9e",
            },
          ],
        },
      ],
    };

    return (
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
    );
  }
}

export default ColumnChart;
