import React from "react";
import LineGraph from "./LineGraph";
import GraphHeader from "./GraphHeader";

function ArtistAnalysis({ selectedArtistName, selectedArtistTrackFeatures }) {
  return (
    <div class="col">
      <div className="col-12">
        <div className="card-card-chart">
          <GraphHeader></GraphHeader>
          <div className="card-body">
            <LineGraph
              selectedArtistName={selectedArtistName}
              selectedArtistTrackFeatures={selectedArtistTrackFeatures}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistAnalysis;
