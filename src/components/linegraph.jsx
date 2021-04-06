import React, { Component } from "react";
import Chart from "chart.js";
import { Bar } from "react-chartjs-2";

// import {
//   Chart,
//   LineController,
//   LineElement,
//   PointElement,
//   LinearScale,
//   Title,
// } from "chart.js";
// Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

class LineGraph extends Component {
  chartRef = React.createRef();

  //   state = {
  //     labels: ["Acousticness", "Danceability"],
  //     datasets: [
  //       {
  //         label: "My First Dataset",
  //         data: [
  //           this.props.selectedArtistTrackFeatures.acousticness,
  //           this.props.selectedArtistTrackFeatures.energy,
  //         ],
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(255, 159, 64, 0.2)",
  //           "rgba(255, 205, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(201, 203, 207, 0.2)",
  //         ],
  //         borderColor: [
  //           "rgb(255, 99, 132)",
  //           "rgb(255, 159, 64)",
  //           "rgb(255, 205, 86)",
  //           "rgb(75, 192, 192)",
  //           "rgb(54, 162, 235)",
  //           "rgb(153, 102, 255)",
  //           "rgb(201, 203, 207)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   };

  getDataPts = () => {
    if (this.props.selectedArtistTrackFeatures === undefined) {
      return [10, 10];
    } else {
      console.log("selectedArtist");
      return [
        this.props.selectedArtistTrackFeatures.acousticness,
        this.props.selectedArtistTrackFeatures.danceability,
        this.props.selectedArtistTrackFeatures.energy,
        this.props.selectedArtistTrackFeatures.instrumentalness,
        this.props.selectedArtistTrackFeatures.liveness,
        this.props.selectedArtistTrackFeatures.speechiness,
        // this.props.selectedArtistTrackFeatures.tempo,
      ];
    }
  };

  render() {
    console.log("Chart - Rendered");
    console.log(this.props);
    return (
      <div>
        <Bar
          data={{
            labels: [
              "Acousticness",
              "Danceability",
              "Energy",
              "Instrumentalness",
              "Liveness",
              "Speechiness",
            ],
            datasets: [
              {
                label: "My First Dataset",
                data: this.getDataPts(),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                  "rgba(255, 205, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(201, 203, 207, 0.2)",
                ],
                borderColor: [
                  "rgb(255, 99, 132)",
                  "rgb(255, 159, 64)",
                  "rgb(255, 205, 86)",
                  "rgb(75, 192, 192)",
                  "rgb(54, 162, 235)",
                  "rgb(153, 102, 255)",
                  "rgb(201, 203, 207)",
                ],
                borderWidth: 1,
              },
            ],
          }}
          options={{
            title: {
              display: true,
              text: this.props.selectedArtistName,
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default LineGraph;
