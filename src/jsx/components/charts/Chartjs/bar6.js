import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart6 extends Component {
  render() {
    const data = {
      defaultFontFamily: "Poppins",
      labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Green",
          backgroundColor: "#5bcfc5",
          hoverBackgroundColor: "rgba(91, 207, 193, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
        {
          label: "Glacier",
          backgroundColor: "rgba(112, 159, 186, 1)",
          hoverBackgroundColor: "rgba(112, 159, 186, 1)",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
        {
          label: "Red",
          backgroundColor: "rgba(238, 60, 60, 1)",
          hoverBackgroundColor: "#ee3c3c",
          data: ["12", "12", "12", "12", "12", "12", "12"],
        },
      ],
    };
    const options = {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true,
          },
        ],
        yAxes: [
          {
            stacked: true,
          },
        ],
      },
    };

    return (
      <>
        <Bar data={data} height={150} options={options} />
      </>
    );
  }
}

export default BarChart6;
