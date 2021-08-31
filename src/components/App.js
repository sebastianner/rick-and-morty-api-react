import React from "react";
import Main from "../pages/Main";

class App extends React.Component {
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
        },
        loading: false,
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className="h-full pt-5 pb-10">
        <Main state={this.state} fetchChar={this.fetchCharacters} />
      </div>
    );
  }
}

export default App;
