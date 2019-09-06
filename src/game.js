class TennisGame {
  //TODO cambiar las clases para que haya solo
  player1 = {
    name: "player1",
    score: 0
  };

  player2 = {
    name: "player2",
    score: 0
  };

  constructor(playerOneName, playerTwoName) {
    this.player1.name = playerOneName;
    this.player2.name = playerTwoName;

    this.matchPossibleScore = ["Love", "Fifteen", "Thirty", "Forty"];
    this.anyoneHasWon = false;
  }

  get name1() {
    return this.player1.name;
  }

  get name2() {
    return this.player2.name;
  }

  get score1() {
    return this.player1.score;
  }

  get score2() {
    return this.player2.score;
  }

  tie = (player1, player2) => {
    return player1.score === player2.score;
  };

  tieAt40 = (playerWon, playerLost) => {
    return (
      playerWon.score >= 3 &&
      playerLost.score >= 3 &&
      playerLost.score === playerWon.score
    );
  };

  anybodyHasAdvantage = () => {
    if (
      this.player1.score === this.player2.score + 1 &&
      this.player1.score > 3
    ) {
      return 1;
    }
    if (
      this.player2.score === this.player1.score + 1 &&
      this.player2.score > 3
    ) {
      return 2;
    }
    return 0;
  };

  anybodyHasWon = () => {
    if (this.score1 >= this.score2 + 2 && this.score1 > 3) {
      return 1;
    }

    if (this.score2 >= this.score1 + 2 && this.score2 > 3) {
      return 2;
    }

    return 0;
  };

  hasWon = (playerOne, playerTwo) =>
    playerOne.score >= playerTwo.score + 2 && playerOne.score > 3;

  wonPoint = playerName => {
    if (this.player1.name === playerName) {
      this.player1.score++;
    }

    if (this.player2.name === playerName) {
      this.player2.score++;
    }
  };

  getScore = () => {
    if (this.tieAt40(this.player1, this.player2)) {
      return "Deuce";
    }

    if (this.tie(this.player1, this.player2)) {
      return `${this.matchPossibleScore[this.player1.score]}-All`;
    }

    if (this.anybodyHasWon()) {
      if (this.anybodyHasWon() === 1) {
        return `Win for ${this.name1}`;
      }

      if (this.anybodyHasWon() === 2) {
        return `Win for ${this.name2}`;
      }
    }

    if (this.anybodyHasAdvantage()) {
      if (this.anybodyHasAdvantage() === 1) {
        return `Advantage ${this.name1}`;
      }

      if (this.anybodyHasAdvantage() === 2) {
        return `Advantage ${this.name2}`;
      }
    }

    return `${this.matchPossibleScore[this.score1]}-${
      this.matchPossibleScore[this.score2]
    }`;
  };
}

export default TennisGame;
