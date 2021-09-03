import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Loader;
