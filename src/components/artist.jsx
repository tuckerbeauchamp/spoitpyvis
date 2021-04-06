import React, { Component } from "react";

class Artist extends Component {
  render() {
    return (
      <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-1">
        <div className="bg-white p-3 h-100">
          <img
            className="img-thumbnail img-fluid rounded-circle mb-3 shadow-sm"
            src={this.props.imgUrl}
            style={{ height: "170px", width: "170px" }}
            onClick={() =>
              this.props.onArtistClick(this.props.artistId, this.props.name)
            }
          ></img>
          <h6 className="mb-1">{this.props.name}</h6>
        </div>
      </div>
    );
  }
}

export default Artist;
