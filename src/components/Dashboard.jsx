import React, { useState, useEffect } from "react";
import ArtistList from "./ArtistList";
import ArtistAnalysis from "./ArtistAnalysis";
import LineGraph from "./LineGraph";

function Dashboard() {
  const [artists, setArtists] = useState([]);
  const [artistId, setArtistId] = useState(null);
  const [artistName, setArtistName] = useState(null);
  const [artistFeatures, setArtistFeatures] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const getTopArtists = async (timeRange) => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");
      console.log("fetching artists...");
      const { artists } = await (
        await fetch("/artists/" + timeRange + "/" + token)
      ).json();
      setArtists(artists);
    } catch (err) {
      setError(err);
    }

    setIsLoaded(true);
  };

  const handleArtistClick = async (artistId, artistName) => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    console.log("artist clicked with id", artistId);

    const data = await fetch(
      "/artists/audio_features/" + artistId + "/" + token
    );

    const result = await data.json();

    console.log("RESULT", result);

    setArtistFeatures(result);
    setArtistId(artistId);
    setArtistName(artistName);

    document.getElementById("analysis").scrollIntoView();
  };

  useEffect(() => {
    console.log("Dashboard mounted");
    const urlParams = new URLSearchParams(window.location.search);
    console.log("Dashboard - fetching artists...");
    getTopArtists("long_term");
  }, []);

  console.log(artists)

  return (
    <>
      <h1>Testing</h1>
      <ArtistList
        onGetTopArtists={getTopArtists}
        artists={artists}
        onArtistClick={handleArtistClick}
      ></ArtistList>
      <ArtistAnalysis
        selectedArtistName={artistName}
        selectedArtistTrackFeatures={artistFeatures}
      ></ArtistAnalysis>
    </>
  );
}

export default Dashboard;
