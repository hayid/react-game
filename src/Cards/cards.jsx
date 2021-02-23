import React, { useState } from 'react';

import generateArrayRandomCard from '../utils/generateArrayRandomCard';

import './cards.css';

const Cards = () => {
  const arr = generateArrayRandomCard(0, 51, 12);
  // стой, на этом всё, учли map и хук useState!  хорошо давай спасибо!спасибо!спасибо!спасибо!спасибо!спасибо!
  const [hayko, setHayko] = useState();

  const cards = arr.map(item => {
    const testFunc = () => console.log(item);

    return (
      <div className='memory-card' onClick={testFunc}>
        <img className='front-face' src={`img/cards/clubs_${item}.png`} alt='club' />
      </div>
    );
  });

  return cards;
};

export default Cards;
