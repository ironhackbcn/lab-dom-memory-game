var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  var j, x, i;
  for (i = this.cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.cards[i];
      this.cards[i] = this.cards[j];
      this.cards[j] = x;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked += 1;
  if (firstCard == secondCard){
    this.pairsGuessed += 1;
    return true;
  } else {
    return false
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.cards.length/2==this.pairsGuessed){
    return true
  } else {
    return false;
  }
};