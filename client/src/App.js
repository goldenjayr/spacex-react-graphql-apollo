import React from "react";
import logo from "./logo.png";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Launches from './components/Launches'

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img src={logo} alt="SpaceX" style={{ width: 500, height: "auto" }} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
