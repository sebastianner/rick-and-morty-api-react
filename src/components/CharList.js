import React, { Component } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";

class CharList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.state.data.results.map((char) => (
          <li key={char.id}>
            <Link to={`/rick-and-morty-api-react/${char.id}`}>
              <Card character={char} state={this.props.state} />
            </Link>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default CharList;
