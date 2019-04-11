var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
};

MemoryGame.prototype.checkIfPair = function (firstClick, secondClick) {
  this.pairsClicked ++;
  if (firstClick === secondClick) {
    this.pairGuessed++;
  }
  return firstClick === secondClick;
}

MemoryGame.prototype.isFinished = function () {
  return this.pairsGuessed === 8;
};