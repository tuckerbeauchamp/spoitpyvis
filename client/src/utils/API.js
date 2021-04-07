const API = {
  async getArtists({ timeRange, token }) {
    const request = await fetch("/artists/" + timeRange + "/" + token);
    return request.json();
  },
  async getFeatures({ artistId, token }) {
    const request = await fetch(
      "/artists/audio_features/" + artistId + "/" + token
    );
    return request.json();
  },
};

export default API;
