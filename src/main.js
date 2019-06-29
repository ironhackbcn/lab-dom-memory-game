"use strict";
var memoryGame = new MemoryGame(cards);
function main() {
  var html = "";
  memoryGame.shuffleCards();

  memoryGame.cards.forEach(function(pic, index) {
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

  // Bind the click event of each element to a function
  function bindCardClicked() {
    var backs = document.querySelectorAll(".back");
    for (let i = 0; i < backs.length; i++) {
      backs[i].addEventListener("click", function() {
        showCard(backs[i]);
        checkTwoClicked();
        printGameInfo();
      });
    }
  }

  bindCardClicked();

  function showCard(back) {
    back.classList.remove("back");
    back.classList.add("front");
    let front = back.nextElementSibling;
    front.classList.remove("front");
    front.classList.add("back");

    let cardParent = back.parentElement;
    memoryGame.pickedCards.push(cardParent);
  }

  function hideCard(front) {
    front.classList.remove("front");
    front.classList.add("back");
    let back = front.nextElementSibling;
    back.classList.remove("back");
    back.classList.add("front");
  }

  function checkTwoClicked() {
    if (memoryGame.pickedCards.length === 2) {
      if (
        !memoryGame.checkIfPair(
          memoryGame.pickedCards[0].getAttribute("data-card-name"),
          memoryGame.pickedCards[1].getAttribute("data-card-name")
        )
      ) {
        blockCards();
        setTimeout(turnBack, 1000);
      } else {
        memoryGame.pickedCards = [];
      }
    } else {
    }
  }

  function turnBack() {
    memoryGame.pickedCards.forEach(function(card) {
      hideCard(card.querySelector(".front"));
    });
    memoryGame.pickedCards = [];
    unblockCards();
  }

  function blockCards() {
    let back = document.querySelectorAll(".back");
    let front = document.querySelectorAll(".front");
    back.forEach(element => (element.className += " blocked"));
    front.forEach(element => (element.className += " blocked"));
  }
  function unblockCards() {
    let back = document.querySelectorAll(".back");
    let front = document.querySelectorAll(".front");
    back.forEach(element => element.classList.remove("blocked"));
    front.forEach(element => element.classList.remove("blocked"));
  }

  // Helpers to create the logic of the game
  function turnBackCards() {
    setTimeout(function() {
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
    card.className += " active";
    card.style.background =
      "url(img/" + card.getAttribute("name") + ") no-repeat";
  }
}

window.addEventListener("load", main);
