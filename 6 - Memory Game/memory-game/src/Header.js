import React, { Component } from 'react';
import './Header.css';

class Header extends Component {


  render() {
    return (
      <div className="header">
        <h1>Memory Game</h1>
        <button onClick={this.props.newGame}>New Game</button>
      </div>
    );
  }
}

export default Header;