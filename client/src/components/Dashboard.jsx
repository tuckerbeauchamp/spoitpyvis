import React, { useState, useEffect } from "react";
import { useStoreContext } from "store";
import API from "utils/API";
import ArtistList from "./ArtistList";
import ArtistAnalysis from "./ArtistAnalysis";

function Dashboard() {
  const [state] = useStoreContext();
  const [artists, setArtists] = useState([]);
  const [artistName, setArtistName] = useState(null);
  const [artistFeatures, setArtistFeatures] = useState([]);

  // eslint-disable-next-line
  const [isLoaded, setIsLoaded] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const token = state.user.token;

  const getTopArtists = async (timeRange) => {
    try {
      const { artists } = await API.getArtists({ timeRange, token });
      setArtists(artists);
    } catch (err) {
      setError(err);
    }
    setIsLoaded(true);
  };

  const handleArtistClick = async (artistId, artistName) => {
    try {
      const result = await API.getFeatures({ artistId, token });
      setArtistFeatures(result);
      setArtistName(artistName);

      document.getElementById("analysis").scrollIntoView();
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getTopArtists("long_term");
  }, []);

  return (
    <>
      <div className="row">
        <ArtistList
          onGetTopArtists={getTopArtists}
          artists={artists}
          onArtistClick={handleArtistClick}
        ></ArtistList>
        <ArtistAnalysis
          selectedArtistName={artistName}
          selectedArtistTrackFeatures={artistFeatures}
        ></ArtistAnalysis>
      </div>
    </>
  );
}

export default Dashboard;
