import React, { Component } from 'react';
import Card from './Card';
import './MemoryGameBoard.css';

class MemoryGameBoard extends Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <div className="gameboard">
        {
          this.props.cards.map(card => <Card color={card} />)
        }
      </div>
    );
  }
}

export default MemoryGameBoard;