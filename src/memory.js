var MemoryGame = function(cards) {
  // class MemoryGame {
  // constructor(cards) {
  this.cards = cards;
  this.shuffleCards();
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
  // }
};

MemoryGame.prototype.shuffleCards = function() {
  var copy = [...this.cards];
  this.cards = [];
  var n = copy.length;
  var i;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    this.cards.push(copy.splice(i, 1)[0]);
  }
};

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked++;
  if (firstCard === secondCard) {
    this.pairsGuessed++;
    return true;
  }
  return false;
};

MemoryGame.prototype.isFinished = function() {
  if (this.cards.length / 2 === this.pairsGuessed) {
    return true;
  }
  return false;
};
