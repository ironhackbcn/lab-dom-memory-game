
class MemoryGame {
  cards = [];
  pickedCards = [];
  pairsClicked = 0;
  pairsGuessed = 0;

  constructor(cards) {
    this.cards = cards;
  }


  shuffleCards() {
    let counter = this.cards.length;
    while (counter > 0) {
      const index = Math.floor(Math.random() * counter);
      counter--;
      const temp = this.cards[counter];
      this.cards[counter] = this.cards[index];
      this.cards[index] = temp;
    }
  }

  checkIfPair(firstCard, secondCard) {
    if (firstCard === secondCard) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }



  isFinished() {
    return this.cards.length / 2 === this.pairsGuessed;
  }
}

