import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import MainContainer from "../pages/MainContainer";
import CharDetailsContainer from "../pages/CharDetailsContainer";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/:charid" component={CharDetailsContainer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
