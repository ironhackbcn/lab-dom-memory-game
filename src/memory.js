var MemoryGame = function (cards) {
  this.cards = cards;
};

MemoryGame.prototype.shuffleCards = function (cards) {
  let shuffledCardsArray = [];
  cards.forEach( () => {
    let randomCardIndex = Math.floor(Math.random()*cards.length);
    let randomCard = cards.splice(randomCardIndex, 1);
    shuffledCardsArray.push(randomCard);
  });
  return shuffledCardsArray;
};

let counterGuessed = 0;
let counterClicked = 0;
function addPairsClicked () {
  counterClicked++;
}
function addPairsGuessed () {
  counterGuessed++;
}
MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
if (firstCard.name === secondCard.name) {
  addPairsGuessed();
 } 
 addPairsClicked();
 return;
}

MemoryGame.prototype.isFinished = function () {
  if (pairsGuessed === cards.length/2) {
    return;
  }
};