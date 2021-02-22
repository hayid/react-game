import React from 'react';
import './cards.css';

const Cards = () => {
  const arr = [0, 1, 2, 3, 4, 5];

  const cards = arr.map(item => (
    <div className='memory-card'>
      <img className='front-face' src={`img/cards/clubs_${item}.png`} alt='club' />
    </div>
  ));

  return cards;
};

export default Cards;
