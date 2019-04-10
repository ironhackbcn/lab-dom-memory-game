var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = [];
  this.pairsGuessed = 0;

};

MemoryGame.prototype.shuffleCards = function (unShuffledCards) {

  let shuffledCards = [];
  
  while(unShuffledCard.length > 0){
    let randomCard = Math.floor(Math.random()*unShuffledCards.length);
    shuffledCards.push(unShuffledCards.splice(randomCard, 1));
  }
  return shuffledCards;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pickedCards.push(firstCard,secondCard);
  if(firstCard===secondCard){
    ++this.pairsGuessed;
    return true;
  }else{
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {
  if(pairsGuessed === 12){
    return true;
  }else{
    return false;
  }
};

