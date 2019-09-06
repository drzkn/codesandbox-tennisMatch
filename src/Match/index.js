import React from "react";

// import TennisGame from "../game";
import TennisGame from "../TennisGame";

import Button from "../Button";
import Label from "../Label";
import Table from "../Table";

class Match extends React.Component {
  constructor(props) {
    super(props);

    const { namePlayerOne, namePlayerTwo } = props;

    this.state = {
      tennisGame: new TennisGame(namePlayerOne, namePlayerTwo),
      score: ""
    };
  }

  componentDidMount() {
    const { tennisGame } = this.state;
    this.setState({ score: [tennisGame.getScore()] });
  }

  updateScore = tennisGame => prevState => {
    const { score } = prevState;
    const newScore = [...score, tennisGame.getScore()];
    return { score: newScore };
  };

  pointWonByPlayer = (name, tennisGame) => {
    tennisGame.wonPoint(name);
    this.setState(this.updateScore(tennisGame));
  };

  render() {
    const { tennisGame, score } = this.state;
    return (
      <div className="App">
        <Label className="title_header">Tennis game</Label>

        <div className="body_container">
          <div className="label_container">
            <Label className="">{tennisGame.name1}</Label>
            <Label className="">{tennisGame.name2}</Label>
          </div>
          <div className="button_container">
            {!tennisGame.anyoneHasWon ? (
              <Button
                onClick={() =>
                  this.pointWonByPlayer(tennisGame.name1, tennisGame)
                }
                className="point"
              >
                Player1
              </Button>
            ) : (
              ""
            )}
            {!tennisGame.anyoneHasWon ? (
              <Button
                onClick={() =>
                  this.pointWonByPlayer(tennisGame.name2, tennisGame)
                }
                className="point"
              >
                Player2
              </Button>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="table_container">
          <Table list={score} />
        </div>

        <div className="button_container">
          <Button
            onClick={() => this.props.actionOnMatch()}
            className="new_player"
          >
            Nuevo partido
          </Button>
        </div>
      </div>
    );
  }
}

export default Match;
