var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsGuessed = 0;
  this.pairsClicked = 0;
  this.firstCard  = this.pickedCards[0];
  this.secondCard  = this.pickedCards[1];
};

MemoryGame.prototype.shuffleCards = function(cards) {
  //let shuffledCardsArray = [];
  this.cards.forEach( () => {
    let randomCardIndex = Math.floor(Math.random()*cards.length);
    let randomCard = this.cards.splice(randomCardIndex, 1);
    this.cards.push(randomCard);
  });
  return;
};


MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  pairsClicked += 1;
  if (this.firstCard === this.secondCard) {
  pairsGuessed += 1;
  return true;
 } else if (this.firstCard !== secondCard)
 return false;
}

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed === this.cards.length/2) {
    return true;
  } else {
    return false;
  }
};