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
    
      cards.push(cardInfo);
    }

    console.log(cards);
    console.log(colorCounts);

    return cards;

  }

  render() {
    return (
      <div className="App">
        <Header initializeCards={this.initializeCards}/>
        <MemoryGameBoard cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
