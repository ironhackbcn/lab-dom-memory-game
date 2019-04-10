var MemoryGame = function (cards) {
  
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairsGuessed = 0;
};

MemoryGame.prototype.shuffleCards = function (cards) {

  let shuffleCards = [];
  while(cards.length > 0){
    let randomIndex = Math.floor(Math.random() * cards.length);
    let cardObject = {name: cards[randomIndex].name, img: cards[randomIndex].img}
    shuffleCards.push(cardObject);
    cards.splice(randomIndex, 1);
  }
  
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {

  this.pairsClickedClicked++;
  
  if(firstCard.name === secondCard.name){
    this.pairsGuessed++;
    return true;
  }
  else{
    return false;
  }
}

MemoryGame.prototype.isFinished = function () {

  if(this.pairsGuessed === this.cards.length/2){
    return true;
  }
  else{
    return false;
  }
};
