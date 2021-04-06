import React, { Component } from "react";

function Artist({ artistId, name, onArtistClick, imgUrl }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
      <div className="bg-white p-3 h-100">
        <img
          className="img-thumbnail img-fluid rounded-circle mb-3 shadow-sm"
          src={imgUrl}
          style={{ height: "170px", width: "170px" }}
          onClick={() => onArtistClick(artistId, name)}
        ></img>
        <h6 className="mb-1">{name}</h6>
      </div>
    </div>
  );
}

export default Artist;
