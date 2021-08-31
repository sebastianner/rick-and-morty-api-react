import React, { Component } from "react";
import Card from "../components/Card";

class CharList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.state.data.results.map((char) => (
          <li key={char.id}>
            <Card character={char} state={this.props.state} />
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default CharList;
