var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = [];
  this.pairsGuessed = [];


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
}

MemoryGame.prototype.isFinished = function () {
};

