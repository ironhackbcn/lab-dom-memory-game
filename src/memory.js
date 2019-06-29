class MemoryGame {

  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;

  }

  shuffleCards() {
    var newList = function (array) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    };

    this.cards = newList(this.cards)

    return undefined
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard.getAttribute("name") === secondCard.getAttribute("name")) {

      this.pairsGuessed++;
      return true
    } else {
      return false
    }

  }

  isFinished() {
    var cardsLengthOK = this.cards.length / 2;

    if ((this.pairsGuessed === 0) || (this.pairsGuessed < cardsLengthOK)) {
      return false
    } else if (this.pairsGuessed === cardsLengthOK) {
      return true
    }
  }

};