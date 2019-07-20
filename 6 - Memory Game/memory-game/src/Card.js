import React from 'react';
import './Card.css';

const Card = ({card, handleClick}) => (
  <div 
    className="card"
    style={ card.matched || card.checking ? {backgroundColor: card.color} : {backgroundColor: '#546e7a'}}
    onClick={() => handleClick(card)}
  >
    
  </div>
);

export default Card;
