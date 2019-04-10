let MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};


MemoryGame.prototype.shuffleCards = function () {
  var cardsCount = this.cards.length;
  var randomNumber;
  var tempCard;
  while (cardsCount !== 0){
    randomNumber = Math.floor(Math.random()*cardsCount);
    cardsCount--;
    tempCard = this.cards[cardsCount];
    this.cards[cardsCount]=this.cards[randomNumber]
    this.cards[randomNumber] = tempCard;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if (firstCard === secondCard) {
    this.pairsGuessed ++;
  }
  return (firstCard === secondCard);
};

MemoryGame.prototype.isFinished = function () {
  if (this.pairsGuessed*2 === this.cards.length){
    return true;
  }
  else {
    return false;
  }
};