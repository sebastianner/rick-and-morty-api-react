import React, { Component } from "react";
import CharList from "../components/CharList";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mb-7">
          <img
            className="m-0 m-auto"
            src="https://lyricstranslate.com/files/styles/large/public/Rick_and_Morty_logo.png?itok=5No-A7PV"
            alt="rick and morty"
          />
        </div>
        <ul className="grid grid-col justify-center gap-5">
          <CharList state={this.props.state} />
        </ul>
        {this.props.state.loading && (
          <p className="text-center text-5xl mt-9">Loading...</p>
        )}
      </React.Fragment>
    );
  }
}

export default Main;
