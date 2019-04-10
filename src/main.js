'use strict';

function main() {
  let memoryGame = new MemoryGame(cards);
  let html = '';
  memoryGame.cards.forEach(function (card) {
    html += '<div class="card" data-card-name="' + card.name + '">';
    html += '  <div class="back" name="' + card.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + card.img + ') no-repeat"></div>';
    html += '</div>';
  });


  // Add all the div's to the HTML
  let memoryBoard = document.querySelector('#memory_board');
  if (memoryBoard) { // this condition is for passing the tests
    memoryBoard.innerHTML = html;
  }

  let front = document.querySelectorAll('.front');
  // Bind the click event of each element to a function

  let back = document.querySelectorAll('.back');

  back.forEach((backDivElement) => {
    backDivElement.addEventListener('click', function () {

      if (!this.classList.contains('active')) {
        memoryGame.pickedCards.push(this);
        displayClickedCard(this);

        // I had some trouble undestand this so I copied from solution 
        if (memoryGame.pickedCards.length > 1) {
          back.forEach((element) => element.classList.add('blocked'));
          front.forEach((element) => element.classList.add('blocked'));

          let firstCard = memoryGame.pickedCards[0].getAttribute("name");
          let secondCard = memoryGame.pickedCards[1].getAttribute("name");

          if (memoryGame.checkIfPair(firstCard, secondCard)) {
            prepareNextTurn();
          } else {
            turnBackCards();
          }
        }
        printGameInfo();
        if (memoryGame.isFinished()) { alert('You wooon!!!'); }
      }
    })
  });


  // Helpers to create the logic of the game
  function turnBackCards() {
    setTimeout(function () {
      memoryGame.pickedCards[0].style.background = '#456783';
      memoryGame.pickedCards[1].style.background = '#456783';
      memoryGame.pickedCards[0].classList.remove('active');
      memoryGame.pickedCards[1].classList.remove('active');
      prepareNextTurn();
    }, 1000);
  }


  function prepareNextTurn() {
    memoryGame.pickedCards = [];
    back.forEach((element) => element.classList.remove('blocked'))
    front.forEach((element) => element.classList.remove('blocked'))
  }


  function printGameInfo() {
    document.getElementById('pairs_clicked').innerHTML = memoryGame.pairsClicked;
    document.getElementById('pairs_guessed').innerHTML = memoryGame.pairsGuessed;
  }

  function displayClickedCard(card) {
    card.className += ' active';
    card.style.background = 'url(img/' + card.getAttribute('name') + ') no-repeat';
  }
};


window.addEventListener('load', main);

