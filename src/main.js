"use strict";

var memoryGame = new MemoryGame(cards);

function main() {
  var firstCard = undefined;
  var lastCard = undefined;

  memoryGame.cards = memoryGame.shuffleCards(cards);
  var html = "";
  memoryGame.cards.forEach(function(pic) {
    html += '<div class="card" data-card-name="' + pic.name + '">';
    html += '  <div class="back" name="' + pic.img + '"></div>';
    html +=
      '  <div class="front" style="background: url(img/' +
      pic.img +
      ') no-repeat"></div>';
    html += "</div>";
    
  });

  // Add all the div's to the HTML
  var memoryBoard = document.querySelector("#memory_board");

  if (memoryBoard) {
    // this condition is for passing the tests
    memoryBoard.innerHTML = html;
  }

  // You will need to do something to the front as well
  var front = document.querySelectorAll(".front");

  // Bind the click event of each element to a function
  var back = document.querySelectorAll(".back");

  back.forEach(everyCard => {
    everyCard.addEventListener("click", logicOnEveryCard);
  });

  function logicOnEveryCard(SelectedCardEvent) {
    if (memoryGame.pickedCards.length === 0) {
      memoryGame.pickedCards.push(SelectedCardEvent.target);
      firstCard = SelectedCardEvent.target;
      displayClickedCard(firstCard);
      console.log("Primera Carta Introducida");
    } else {
      memoryGame.pickedCards.push(SelectedCardEvent.target);
      lastCard = SelectedCardEvent.target;
      displayClickedCard(lastCard);
      console.log("Segunda Carta Introducida");
      if (
        memoryGame.pickedCards.length === 2 &&
        memoryGame.checkIfPair(firstCard.getAttribute("name"), lastCard.getAttribute("name"))
      ) {
        console.log("Son iguales");
        memoryGame.pickedCards[0].classList.replace("active", "blocked");
        memoryGame.pickedCards[1].classList.replace("active", "blocked");
        memoryGame.pickedCards = [];
        firstCard = undefined;
        lastCard = undefined;
        printGameInfo();
      } else {
        console.log("No son Iguales");
        printGameInfo();
        turnBackCards();
      }
    }
    win();
  }
  // Helpers to create the logic of the game
  function turnBackCards() {
    setTimeout(() => {
      memoryGame.pickedCards[0].style.background = "#456783";

      memoryGame.pickedCards[1].style.background = "#456783";

      memoryGame.pickedCards[0].classList.remove("active");
      memoryGame.pickedCards[1].classList.remove("active");
      prepareNextTurn();
    }, 1000);
  }

  function prepareNextTurn() {
    memoryGame.pickedCards = [];
    back.forEach(element => element.classList.remove("blocked"));
    front.forEach(element => element.classList.remove("blocked"));
  }

  function printGameInfo() {
    document.getElementById("pairs_clicked").innerHTML =
      memoryGame.pairsClicked;
    document.getElementById("pairs_guessed").innerHTML =
      memoryGame.pairsGuessed;
  }

  function displayClickedCard(card) {
    console.log(card);
    card.className += " active";
    card.style.background =
      "url(img/" + card.getAttribute("name") + ") no-repeat";
  }

  function win() {
    if (memoryGame.isFinished()) {
      alert("YOU WIN");
    }
  }
}

window.addEventListener("load", main);
