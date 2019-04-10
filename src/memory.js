var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

//***************************************************/

MemoryGame.prototype.shuffleCards = function(array) {
  
  if(array.length === 0){
    return undefined;
  }

  var newDeck = [];
  for( ; array.length; ){
    let randomIndex = Math.random() * this.cards.length;
    let randomCard = array.splice(randomIndex, 1);
    newDeck.push(randomCard);
  }

  return newDeck;
}

//***************************************************/

MemoryGame.prototype.checkIfPair = function(firstCard, secondCard) {
  this.pairsClicked += 1;
  if(firstCard.name === secondCard.name){
    this.pairsGuessed += 1;
    return true;
  }  
  return false;
}

//***************************************************/

MemoryGame.prototype.isFinished = function() {
  if (this.pairsGuessed === this.cards.length / 2) {
    return true;
  } else {
    return false;
  }
}
