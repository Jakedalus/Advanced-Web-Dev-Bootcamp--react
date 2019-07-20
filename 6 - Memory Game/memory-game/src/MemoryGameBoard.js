import React, { Component } from 'react';
import Card from './Card';
import './MemoryGameBoard.css';

class MemoryGameBoard extends Component {

  constructor(props) {
    super(props);


  }



  render() {
    console.log(this.props);
    return (
      <div 
        className="gameboard"
      >
        {
          this.props.cards.map((card, i) => <Card key={i} card={{index: i, ...card}} handleClick={this.props.handleClick}/>)
        }
      </div>
    );
  }
}

export default MemoryGameBoard;