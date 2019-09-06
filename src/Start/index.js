import React from "react";

import Button from "../Button";
import Input from "../Input";
import Label from "../Label";

class Start extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      namePlayer1: "",
      namePlayer2: "",
      errorPlayer1: false,
      errorPlayer2: false
    };
  }

  startMatch = (namePlayer1, namePlayer2) => {
    this.props.actionOnMatch(namePlayer1, namePlayer2);
  };

  checkStartmatch = () => {
    const { namePlayer1, namePlayer2 } = this.state;
    namePlayer1
      ? this.setState({ errorPlayer1: false })
      : this.setState({ errorPlayer1: true });

    namePlayer2
      ? this.setState({ errorPlayer2: false })
      : this.setState({ errorPlayer2: true });

    if (namePlayer1 && namePlayer2) {
      this.startMatch(namePlayer1, namePlayer2);
    }
  };

  onChangeInputPlayer = (id, event) => {
    const { value } = event.target;
    id === 1
      ? this.setState({ namePlayer1: value })
      : this.setState({ namePlayer2: value });
  };

  render() {
    const { errorPlayer1, errorPlayer2 } = this.state;
    return (
      <div className="App">
        <Label className="title_header">Tennis game</Label>

        <div className="body_container">
          <div className="label_container">
            <Label className="label_for_input">Jugador 1</Label>
            <Label className="label_for_input">Jugador 2</Label>
          </div>
          <div className="input_container">
            <Input
              className="input_player"
              name="Jugador_1"
              value={this.state.player1}
              onChange={event => this.onChangeInputPlayer(1, event)}
            />
            <Input
              className="input_player"
              name="Jugador_2"
              value={this.state.player2}
              onChange={event => this.onChangeInputPlayer(2, event)}
            />
          </div>
        </div>

        {errorPlayer1 ? (
          <div>
            <Label className="error">
              Introduzca un nombre para el Jugador 1
            </Label>
          </div>
        ) : (
          ""
        )}
        {errorPlayer2 ? (
          <div>
            <Label className="error">
              Introduzca un nombre para el Jugador 2
            </Label>
          </div>
        ) : (
          ""
        )}
        <div className="button_contianer">
          <Button onClick={() => this.checkStartmatch()} className="new_player">
            Empezar partido
          </Button>
        </div>
      </div>
    );
  }
}

export default Start;
