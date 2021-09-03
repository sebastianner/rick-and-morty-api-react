import React, { Component } from "react";
import CharDetails from "./CharDetails";

class CharDetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  fetchCharacter = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${this.props.match.params.charid}`
      ).then((data) => data.json());
      this.setState({
        data: response,
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return <CharDetails state={this.state} />;
  }
}

export default CharDetailsContainer;
