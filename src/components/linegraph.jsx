import React from "react";
import { Bar } from "react-chartjs-2";

function LineGraph({ selectedArtistTrackFeatures, selectedArtistName }) {
  const getDataPts = () => {
    if (!selectedArtistTrackFeatures) return [10, 10];

    return [
      selectedArtistTrackFeatures.acousticness,
      selectedArtistTrackFeatures.danceability,
      selectedArtistTrackFeatures.energy,
      selectedArtistTrackFeatures.instrumentalness,
      selectedArtistTrackFeatures.liveness,
      selectedArtistTrackFeatures.speechiness,
    ];
  };

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
              data: getDataPts(),
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
            text: selectedArtistName || "Select an Artist to view their data!",
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

export default LineGraph;
