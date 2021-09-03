import React, { Component } from "react";
import Main from "./Main";

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: [],
      },
    };
  }

  componentDidMount() {
    this.fetchCharacters();

    window.onscroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1
      ) {
        this.setState({
          nextPage: `${parseInt(this.state.nextPage) + 1}`,
        });
        this.fetchCharacters();
      }
    };
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      ).then((data) => data.json());
      this.setState({
        data: {
          info: response.info,
          results: [].concat(this.state.data.results, response.results),
          // new characters are showed in the same page
        },
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.data.results === []) {
      return `Error: No data was found`;
    }

    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return <Main state={this.state} />;
  }
}

export default MainContainer;
