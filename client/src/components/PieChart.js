import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {
  render() {
    const total = 2381160;
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      title: {
        text: "Different Crimes in the year 2017",
      },
      data: [
        {
          type: "pie",
          startAngle: 75,
          toolTipContent: "<b>{label} cases</b>: {y}",
          showInLegend: "true",
          legendText: "{label}",
          indexLabelFontSize: 16,
          indexLabel: "{z}%",
          dataPoints: [
            {
              y: 348421,
              z: Math.round((348421 / total) * 100),
              label: "Murder",
              color: "#e5d8b0",
            },
            {
              y: 553455,
              z: Math.round((553455 / total) * 100),
              label: "Robbery",
              color: "#ffb367",
            },
            {
              y: 230391,
              z: Math.round((230391 / total) * 100),
              label: "Kidnapping/Abduction",
              color: "#f98461",
            },
            {
              y: 430494,
              z: Math.round((430494 / total) * 100),
              label: "Drug/Narcotic Violations",
              color: "#d9695f",
            },
            {
              y: 345337,
              z: Math.round((345337 / total) * 100),
              label: "Sexual Assault",
              color: "#ac5a41",
            },
            {
              y: 342373,
              z: Math.round((342373 / total) * 100),
              label: "Rape",
              color: "#393f63",
            },
            {
              y: 130689,
              z: Math.round((130689 / total) * 100),
              label: "Others",
              color: " #747a9e",
            },
          ],
        },
      ],
    };

    return (
      <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
    );
  }
}

export default PieChart;
