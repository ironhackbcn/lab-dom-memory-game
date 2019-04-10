'use strict';

function main () {
  var html = '';
  var memoryGame = new MemoryGame(cards);
  //applying those 3 classes to each card in memory game
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
  
  // Bind the click event of each element to a function
  var back = document.querySelectorAll('.back'); //querySelector returns node list so I'm spreading it into an array
  let backArray = [...back];
  backArray.forEach( (ele) => {
    ele.addEventListener('click', function () {
      this.classList.toggle('front'); // for each element in arr change the class from back to front
      console.log('toggle');
    });
  })
  

  // You will need to do something to the front as well
  var front = document.querySelectorAll('.front'); 
  let frontArray = [...front];
  frontArray.forEach( (ele) => { 
    ele.addEventListener('click', function () { 
      this.classList.toggle('back');
      console.log('toggle');
    });
  })
  
  let active = document.querySelectorAll('.active');
  let activeArray = [...active];
  activeArray.forEach( (ele) => {
    ele.addEventListener('click', function () {
      this.pickedCards.push(active); // pushing into the active array on each click -- needs condition that blocks from pushing if card gets clicked twice
    });
  })

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

main(MemoryGame);

window.addEventListener('load', main);


