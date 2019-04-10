var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  if(this.cards.length === 0) return undefined;

  let shuffledCards = [];
  for( ; this.cards.length>0 ; 0){
    let randomNum = Math.floor(Math.random()* this.cards.length);
    let randomCard = this.cards.splice(randomNum, 1);
    shuffledCards.push(randomCard);
  }
  cards = shuffledCards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;
  if(firstCard === secondCard){
    this.pairsGuessed ++;
    return true;
  } else{
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if(this.pairsGuessed === cards.length/2){
    return true;
  } else {
    return false;
  }
};