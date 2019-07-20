import React from 'react';
import './Card.css';

const Card = ({color}) => (
  <div 
    className="card"
    style={{backgroundColor: color}}>
  </div>
);

export default Card;
