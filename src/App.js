import React, { Component } from 'react';
import towers from './towers.json';
import Scoreboard from './components/Scoreboard';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import TowerCard from './components/TowerCard';


class App extends Component {
  // Setting this.state.towers to the towers json array
  state = {
    towers,
    message: "Click an image to begin!",
    score: 0,
    topScore: 0
  };

  handleClickEvent = id => {
    let newTowers = this.state.towers.sort(() => Math.random() - 0.5)
    this.state.towers.filter(card => {
      if (id === card.id) {
        if (card.clicked === false) {
          card.clicked = true;
          this.setState({
            score: this.state.score + 1,
            message: "That was a great choice!"
          });
          if (this.state.score >= this.state.topScore) {
            this.setState({ topScore: this.state.topScore + 1 })
          }

        }
        else {
          this.newRound();
        }
      }
      return newTowers;
    });
  }

  newRound = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    this.state.towers.forEach(tower => {
      return tower.clicked = false;
    });
    this.setState({
      message: "Uh oh, you already chose that one! Game restarted. Try Again!",
      score: 0
    });
  }

  render() {
    return (
      <div>
        <Scoreboard score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron message={this.state.message} />
        <Container>
          {this.state.towers.map(tower => (
            <TowerCard
              handleClickEvent={this.handleClickEvent}
              id={tower.id}
              key={tower.id}
              image={tower.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
