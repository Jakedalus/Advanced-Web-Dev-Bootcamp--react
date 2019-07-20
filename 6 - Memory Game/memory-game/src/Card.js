import React from 'react';
import './Card.css';

const Card = ({card}) => (
  <div 
    className="card"
    style={ card.matched ? {backgroundColor: card.color} : {backgroundColor: '#546e7a'}}>
    
  </div>
);

export default Card;
