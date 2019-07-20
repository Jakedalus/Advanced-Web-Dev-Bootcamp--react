import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MemoryGameBoard from './MemoryGameBoard';




class App extends Component {

  constructor(props) {
    super(props);

    const cards = this.initializeCards();

    this.state = {
      cards
    };

    this.handleClick = this.handleClick.bind(this);
    this.newGame = this.newGame.bind(this);
    
  }

  initializeCards() {

    // color pallete from material.io: https://material.io/tools/color/#!/?view.left=0&view.right=0
    const colors = ['#ff8a80', '#ea80fc', '#b388ff', '#82b1ff', '#84ffff', '#b9f6ca', '#f4ff81', '#ff80ab'];
    const colorCounts = {
      '#ff8a80': 2, 
      '#ea80fc': 2, 
      '#b388ff': 2, 
      '#82b1ff': 2, 
      '#84ffff': 2, 
      '#b9f6ca': 2, 
      '#f4ff81': 2, 
      '#ff80ab': 2
    };

    const cards = [];

    for (let i = 0; i < 16; i++) {
      let randomColor;
      let cardInfo = {};

      randomColor = colors[Math.floor(Math.random() * colors.length)];
      colorCounts[randomColor]--;

      if(colorCounts[randomColor] === 0) {
        colors.splice(colors.indexOf(randomColor), 1);
      }

      cardInfo.color = randomColor;
      cardInfo.matched = false;
      cardInfo.checking = false;
    
      cards.push(cardInfo);
    }

    console.log(cards);
    console.log(colorCounts);

    return cards;

  }

  handleClick(card) {
    console.log(card);
    const newCards = JSON.parse(JSON.stringify(this.state.cards));

    const cardsBeingChecked = newCards.filter(card => card.checking === true);

    console.log('cardsBeingChecked', cardsBeingChecked);

    if (cardsBeingChecked.length <= 1) {
      newCards.splice(card.index, 1, {checking: true, matched: card.matched, color: card.color});


      console.log('newCards', newCards);
      this.setState({cards: newCards});
    } 

    if (cardsBeingChecked.length === 1){
      const clearedCards = newCards.map(card => ({checking: false, matched: card.matched, color: card.color}));

      

      if (cardsBeingChecked[0].color === card.color) {
        console.log("MATCHED!!!", card, cardsBeingChecked[0]);
        const color = card.color;
        for (let i = 0; i < clearedCards.length; i++) {
          if (clearedCards[i].color === color) {
            clearedCards[i].matched = true;
          }
        }
      }

      setTimeout(() => {
        console.log('clearedCards', clearedCards);
        this.setState({cards: clearedCards});
      }, 500);
      
    }
  }

  newGame() {
    console.log('NEW GAME!!');
    const cards = this.initializeCards();

    console.log(cards);

    this.setState({cards});
  }

  render() {
    return (
      <div className="App">
        <Header newGame={this.newGame}/>
        <MemoryGameBoard cards={this.state.cards} handleClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
