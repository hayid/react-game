const generateArrayRandomCard = (min, max, field) => {
  let totalCards = max - min + 1;
  let arrayTotalCards = [];
  let arrayRandomCards = [];
  let tempRandomCard;
  while (totalCards--) {
    arrayTotalCards.push(totalCards + min);
  }
  while (arrayTotalCards.length) {
    tempRandomCard = Math.round(Math.random() * (arrayTotalCards.length - 1));
    arrayRandomCards.push(arrayTotalCards[tempRandomCard]);
    arrayTotalCards.splice(tempRandomCard, 1);
  }
  arrayRandomCards.length = field / 2;

  return arrayRandomCards.concat(arrayRandomCards);
};

export default generateArrayRandomCard;
