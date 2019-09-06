import React from "react";
import ReactDOM from "react-dom";

import Start from "./Start";
import Match from "./Match";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matchStarted: false,
      namePlayer1: "",
      namePlayer2: ""
    };
  }

  startMatch = (namePlayer1, namePlayer2) => {
    this.setState({
      matchStarted: true,
      namePlayer1: namePlayer1,
      namePlayer2: namePlayer2
    });
  };

  endMatch = () => {
    this.setState({
      matchStarted: false,
      namePlayer1: "",
      namePlayer2: ""
    });
  };

  render() {
    const { matchStarted, namePlayer1, namePlayer2 } = this.state;
    return matchStarted ? (
      <Match
        namePlayerOne={namePlayer1}
        namePlayerTwo={namePlayer2}
        actionOnMatch={this.endMatch}
      />
    ) : (
      <Start actionOnMatch={this.startMatch} />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
