import React, { Component } from "react";

class GeaphHeader extends Component {
  state = {};
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-sm-6 text-left">
            <h5 className="card-category">Artist Name</h5>
            <h2 className="card-title">Artist Analysis</h2>
          </div>
          <div className="col-sm-6">
            <div
              className="btn-group btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <label
                htmlFor=""
                className="btn btn-sm btn-primary btn-simple active"
              >
                <input type="radio" name="options" checked></input>
                <span className="d-none d-sm-block d-md-block d-xl-block">
                  Accounts
                </span>
                <span className="d-block s-sm-none">
                  <i className="tim-icons icon-single-02"></i>
                </span>
              </label>
              <label htmlFor="" className="btn btn-sm btn-primary btn-simple">
                <input type="radio" name="options" checked></input>
                <span className="d-none d-sm-block d-md-block d-xl-block">
                  Performance
                </span>
                <span className="d-block s-sm-none">
                  <i className="tim-icons icon-single-02"></i>
                </span>
              </label>
              <label htmlFor="" className="btn btn-sm btn-primary btn-simple">
                <input type="radio" name="options" checked></input>
                <span className="d-none d-sm-block d-md-block d-xl-block">
                  Sessions
                </span>
                <span className="d-block s-sm-none">
                  <i className="tim-icons icon-single-02"></i>
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GeaphHeader;
