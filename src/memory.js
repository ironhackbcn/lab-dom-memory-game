class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    // a little bit of googling
    for (let i = this.cards.length - 1; i > 0; i--) {
      let x = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[x]] = [this.cards[x], this.cards[i]];
    }
  }

  checkIfPair(cardSelected1, cardSelected2) {
    this.pairsClicked += 1;
    if (cardSelected1 === cardSelected2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2 && this.pairsClicked > 0) {
      return true;
    }
    return false;
  }
}
