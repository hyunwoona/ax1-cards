import React from 'react';

import logo from './logo.svg';
import './App.css';

import { Hand, Card, CardBack } from 'react-deck-o-cards';

const defHandStyle = {
  maxHeight:'34vh',
  minHeight:'34vh',

  maxWidth:'100vw',
  padding: 0,
};

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function createNewHand() {
  let cards = [];
  for (let i = 0; i < 4; ++i) {
   [11, 12, 13, 1].forEach((j) => {
     cards.push({
       rank:j, suit: i
     });
   });
  }

  return shuffle(cards);
}

class ExerciseLabel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {topCard} = this.props;
    if (!topCard) {
      return <p></p>;
    }
    const {rank, suit} = topCard;

    let suitToRep = [20, 12, 15, 10];
    let rankToExercise = {
      '11': 'Jump Squats',
      '12': 'Mountain Climbers',
      '13': 'High Knees',
      '1': 'Heels to the Heavens'
    }
    let rep = suitToRep[suit];
    let exercise = rankToExercise[rank];

    return <p style={{fontSize: '24px', textAlign: 'center'}}>{`${rep} ${exercise}`}</p>;
  }
}


class App extends React.Component {
  constructor(props) {
     super(props);

     this.state = {
        cards: createNewHand(),
        usedCards: [],
     }
     this.handleUpdateCards = this.handleUpdateCards.bind(this);
     this.handleResetCards = this.handleResetCards.bind(this);
  }

  handleUpdateCards(e) {
    let newCard = this.state.cards[this.state.cards.length - 1];
    this.setState((state) => {
      return {
        cards: state.cards.slice(0, state.cards.length-1),
        usedCards: state.usedCards.concat(newCard),
      };
    });
  }

  handleResetCards(e) {
    if (this.state.cards.length) {
      let currentCard = this.state.usedCards[this.state.usedCards.length - 1];
      this.setState((state) => {
        return {
          cards: state.cards.concat(currentCard),
          usedCards: state.usedCards.slice(0, state.usedCards.length - 1),
        };
      });
    } else {
      this.setState(state => {
        return {
          cards: createNewHand(),
          usedCards: [],
        };
      });
    }
  }

  render() {
     return (
        <div>
          <Hand
            cards={this.state.cards}
            hidden={false}
            style={defHandStyle}
            cardOffset={10}
            onClick={this.handleUpdateCards}
          />

          <Hand
            cards={this.state.usedCards}
            hidden={false}
            style={defHandStyle}
            cardOffset={10}
            onClick={this.handleResetCards}
          />

          <ExerciseLabel
            topCard={this.state.usedCards.length && this.state.usedCards[this.state.usedCards.length - 1]}
          />
        </div>
     );
  }
}

export default App;
