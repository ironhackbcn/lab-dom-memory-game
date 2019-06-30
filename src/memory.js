var MemoryGame = function(cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function(cards) {
  var m = cards.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = cards[m];
    cards[m] = cards[i];
    cards[i] = t;
  }
  return cards;
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  } else if (firstCard !== secondCard) {
    return false;
  }
};

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  }
  return false;
};

