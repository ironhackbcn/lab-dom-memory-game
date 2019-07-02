'use strict';

function main () { 
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  var memoryBoard = document.querySelector('#memory_board');
  if(memoryBoard) { // this condition is for passing the tests
    memoryBoard.innerHTML = html;
  }
  
  // You will need to do something to the front as well
  var front = document.querySelectorAll('.front');

  // front.addEventListener('click', function () { console.log('clicado front');
  //   // TODO: Your code goes here!
  //   alert('clico en front');
  // });

  for (var i = 0; i < front.length; i++) {
    front[i].addEventListener('click', function () {

    });
  }

  // Bind the click event of each element to a function
  var back = document.querySelector('.back');
  back.addEventListener('click', function () {
    // TODO: Your code goes here!
    alert('clico en back');
    // back.setAttribute('class','front');

    displayClickedCard(cards[0]);
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
    back.forEach((element)=> element.classList.remove('blocked'))
    front.forEach((element)=> element.classList.remove('blocked'))
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


