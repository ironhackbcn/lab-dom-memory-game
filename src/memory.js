class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    if (this.cards === undefined) {
      return undefined;
    }

    var arrayLength = this.cards.length;
    var swap;
    var random;

    while (arrayLength) {
      random = Math.floor(Math.random() * arrayLength--);
      swap = this.cards[arrayLength];
      this.cards[arrayLength] = this.cards[random];
      this.cards[random] = swap;
    }
  }
  checkIfPair(firstCard, secondCard) {
    if (firstCard === secondCard) {
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    } else {
      return false;
    }
  }
}
