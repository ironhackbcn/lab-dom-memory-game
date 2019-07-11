class MemoryGame {
  constructor(cards) {
    this.cards = cards;// this.shuffleCards(JSON.parse(JSON.stringify(cards)));
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(cards) {
    if (typeof cards === "undefined") return undefined;
    var inTheMiddle = 0;
    var indexRandom = 0;
    var indexCards = cards.length;
    while (indexCards !== 0) {
      indexRandom = Math.floor(Math.random() * indexCards);
      indexCards--;
      inTheMiddle = cards[indexRandom];
      cards[indexRandom] = cards[indexCards];
      cards[indexCards] = inTheMiddle;
    }

    return cards;
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
      console.log(firstCard,secondCard)
      this.pairsGuessed++;
      return true;
    } else return false;
  }

  isFinished() {
    
    if (this.cards.length / 2 === this.pairsGuessed ) return true;
    else return false;
  }
}
