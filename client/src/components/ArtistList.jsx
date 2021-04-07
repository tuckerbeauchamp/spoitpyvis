import React from "react";
import Artist from "./Artist";

function ArtistList({ onGetTopArtists, artists, onArtistClick }) {
  return (
    <div className="card col">
      <div className="card-header bg-light">
        <div className="row align-items-center">
          <div className="col">
            <h5 className="mb-0">Top Artists</h5>
          </div>
          <div className="col">
            <button
              className="btn btn-primary rounded-pill mr-2 me-1"
              onClick={() => onGetTopArtists("long_term")}
            >
              Long Term
            </button>
            <button
              className="btn btn-primary rounded-pill mr-2 me-1"
              onClick={() => onGetTopArtists("medium_term")}
            >
              Medium Term
            </button>
            <button
              className="btn btn-primary rounded-pill mr-2 me-1"
              onClick={() => onGetTopArtists("short_term")}
            >
              Short Term
            </button>
          </div>
        </div>
      </div>
      <div className="card-body bg-light p-0">
        <div className="row no-gutters text-center fs--1">
          {artists.map((artist) => (
            <Artist
              key={artist.id}
              name={artist.name}
              imgUrl={artist.images[2].url}
              artistUri={artist.external_urls.spotify}
              artistId={artist.id}
              onArtistClick={onArtistClick}
            ></Artist>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistList;
