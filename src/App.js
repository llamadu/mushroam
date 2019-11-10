import React, { Component } from 'react';
import mushrooms from './mushrooms.json';
import Scoreboard from './components/Scoreboard';
import Jumbotron from './components/Jumbotron';
import Container from './components/Container';
import MushroomCard from './components/MushroomCard';


class App extends Component {
  // Setting this.state.mushroom to the mushrooms json array
  state = {
    mushrooms,
    message: "Click an image to begin!",
    score: 0,
    topScore: 0
  };

  handleClickEvent = id => {
    let newMushrooms = this.state.mushrooms.sort(() => Math.random() - 0.5)
    this.state.mushrooms.filter(card => {
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
      return newMushrooms;
    });
  }

  newRound = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    this.state.mushrooms.forEach(mushroom => {
      return mushroom.clicked = false;
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
          {this.state.mushrooms.map(mushroom => (
            <MushroomCard
              handleClickEvent={this.handleClickEvent}
              id={mushroom.id}
              key={mushroom.id}
              image={mushroom.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;
