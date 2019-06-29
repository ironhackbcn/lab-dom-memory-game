'use strict';

function main() {
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html += '  <div class="front" style="background: url(img/' + pic.img + ') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  var memoryBoard = document.querySelector('#memory_board');
  if (memoryBoard) { // this condition is for passing the tests
    memoryBoard.innerHTML = html;
  }
  // You will need to do something to the front as well
  var front = document.querySelectorAll('.front');
  // Bind the click event of each element to a function
  // var back = document.querySelector('.back');
  var back = document.querySelectorAll('.back');

  var funElemntBoxes = function (element) {
    return function () {
      displayClickedCard(element);
      memoryGame.pickedCards.push(element);
      console.log("mirar el memory" + memoryGame.pickedCards)

      if (memoryGame.pickedCards.length === 2) {
        blockedCards();
        if (memoryGame.checkIfPair(memoryGame.pickedCards[0], memoryGame.pickedCards[1])) {
          memoryGame.pickedCards = [];
        } else {
          turnBackCards();
        }
        printGameInfo();
      }
    }
  }

  function addEvent() {
    back.forEach((element) => element.addEventListener('click', funElemntBoxes(element)));
  }

  function removeEventLinerElement() {
    back.forEach((element) => element.removeEventListener('click', funElemntBoxes(element)));
  }

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


  function blockedCards() {
    back.forEach((element) => element.classList.add('blocked'))
    front.forEach((element) => element.classList.add('blocked'))
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
    console.log("TCL: displayClickedCard -> card", card)
    card.className += ' active';
    card.style.background = 'url(img/' + card.getAttribute('name') + ') no-repeat';
  }

  addEvent()
};

window.addEventListener('load', main);