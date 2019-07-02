class MemoryGame{
  constructor(cards){
    // this.memoryGame = new MemoryGame();
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(){
    var m = this.cards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
  
      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }  
  }

  checkIfPair(name1, name2){
    this.pairsClicked ++;
    if(name1 === name2){
      this.pairsGuessed ++;
      return true;
    } else{
      return false;
    }
  }

  isFinished(){
    if(this.pairsGuessed === this.cards.length/2){
      return true;
    } else{
      return false;
    }
  }
}


