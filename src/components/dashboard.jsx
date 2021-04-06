import React, { Component } from "react";
import ArtistList from "./artistlist";
import ArtistAnalysis from "./artistanalysis";
import LineGraph from "./linegraph";

class Dashboard extends Component {
  state = {
    artists: [],
    selectedArtistId: null,
    selectedArtistName: null,
  };

  getTopArtists = (timeRange) => {
    const urlParams = new URLSearchParams(window.location.search);

    // if(this.getToken()) {

    // } else {

    // }
    const token = urlParams.get("token");
    console.log("fetching artists...");
    fetch("/artists/" + timeRange + "/" + token)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            artists: result.artists,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };

  handleArtistClick = (artistId, artistName) => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log("artist clicked with id", artistId);
    // this.setState({
    //   selectedArtistId: artistId,
    //   selectedArtistName: artistName,
    // });
    fetch("/artists/audio_features/" + artistId + "/" + token)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            selectedArtistTrackFeatures: result,
            selectedArtistId: artistId,
            selectedArtistName: artistName,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
    console.log(this.state);
    document.getElementById("analysis").scrollIntoView();
  };

  componentDidMount() {
    console.log("Dashboard mounted");
    const urlParams = new URLSearchParams(window.location.search);
    console.log("Dashboard - fetching artists...");
    this.getTopArtists("long_term");
  }

  render() {
    return (
      <React.Fragment>
        <ArtistList
          onGetTopArtists={this.getTopArtists}
          artists={this.state.artists}
          onArtistClick={this.handleArtistClick}
        ></ArtistList>
        <ArtistAnalysis
          selectedArtistName={this.state.selectedArtistName}
          selectedArtistTrackFeatures={this.state.selectedArtistTrackFeatures}
        ></ArtistAnalysis>
      </React.Fragment>
    );
  }
}

export default Dashboard;
