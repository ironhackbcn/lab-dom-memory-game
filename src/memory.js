var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCard = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function () {
  let result = [];
  for ( ; this.cards.length > 0 ; ){
    let randomNumber = Math.floor(Math.random()*array.length);
    let randomCard = this.card.splice( randomNumber,1);

    result.push(randomCard);
  }
  return result;
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
  this.pairsClicked ++;  
  if (firstCard === secondCard){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click',flipCard);
    return ;
  }
}

MemoryGame.prototype.isFinished = function () {
};