import React, { Component } from "react";
import Artist from "./artist";

class ArtistList extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-light">
          <div className="row align-items-center">
            <div className="col">
              <h5 className="mb-0">Top Artists</h5>
            </div>
            <div className="col">
              <button
                className="btn btn-primary rounded-pill mr-2 me-1"
                onClick={() => this.props.onGetTopArtists("long_term")}
              >
                Long Term
              </button>
              <button
                className="btn btn-primary rounded-pill mr-2 me-1"
                onClick={() => this.props.onGetTopArtists("medium_term")}
              >
                Medium Term
              </button>
              <button
                className="btn btn-primary rounded-pill mr-2 me-1"
                onClick={() => this.props.onGetTopArtists("short_term")}
              >
                Short Term
              </button>
            </div>
          </div>
        </div>
        <div className="card-body bg-light p-0">
          <div className="row no-gutters text-center fs--1">
            {this.props.artists.map((artist) => (
              <Artist
                key={artist.id}
                name={artist.name}
                imgUrl={artist.images[2].url}
                artistUri={artist.external_urls.spotify}
                artistId={artist.id}
                onArtistClick={this.props.onArtistClick}
              ></Artist>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ArtistList;
