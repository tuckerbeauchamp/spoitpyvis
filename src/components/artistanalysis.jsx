import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import LineGraph from "./linegraph";
import GraphHeader from "./graphheader";

class ArtistAnalysis extends Component {
  render() {
    console.log(this.props);
    return (
      <div class="row">
        <div className="col-12">
          <div className="card-card-chart">
            <GraphHeader></GraphHeader>
            <div className="card-body">
              <LineGraph
                selectedArtistName={this.props.selectedArtistName}
                selectedArtistTrackFeatures={
                  this.props.selectedArtistTrackFeatures
                }
              />
            </div>
          </div>
        </div>
        <h1 id="analysis">Artist Analysis</h1>
      </div>
    );
  }
}

export default ArtistAnalysis;
