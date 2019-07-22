import React, { Component } from 'react';
import './Header.css';

const Header = ({correct, incorrect}) => (
  <div className="header">
    <h1>Guess the Flag</h1>
    <div className="score">
      <h3>Correct: {correct}</h3>
      <h3>Incorrect: {incorrect}</h3>
    </div>
  </div>
);

export default Header;