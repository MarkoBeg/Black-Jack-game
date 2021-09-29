const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let i = 0;

const newGame = () => {
  location.reload();
};

let player = {
  name: "Marko",
  chips: 145,
};

let playerEL = document.getElementById("player-el");
playerEL.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondcard = getRandomCard();
  cards = [];
  let sum = firstCard + secondcard;
  if (hasBlackJack) {
    newGame();
  }
  if (isAlive === false) {
    newGame();
  }
  renderGame();
}

function renderGame() {
  if (sum <= 20) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    messageEl.textContent = "Wohoo! You have go Blackjack!";
    hasBlackJack = true;
  } else {
    messageEl.textContent = "You are out of the game";
    isAlive = false;
  }
  sumEl.textContent = "Sum " + sum;
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}
