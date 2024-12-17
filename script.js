// Italiaanse kerstwoorden voor het memoryspel
const italianWords = [
  "albero", "regalo", "Babbo Natale", "panettone", "presepe",
  "stella", "campana", "neve", "candela", "angelo",
  "albero", "regalo", "Babbo Natale", "panettone", "presepe",
  "stella", "campana", "neve", "candela", "angelo",
  "renna", "renna", "fiocco", "fiocco", "calza"
];

let flippedCards = [];
let matchedCards = [];

// Schud de kaarten
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Maak het speelbord
function createBoard() {
  shuffle(italianWords);
  const board = document.getElementById("game-board");
  board.innerHTML = ""; // Maak het bord leeg
  italianWords.forEach((word, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = word;
    card.dataset.index = index;
    card.addEventListener("click", flipCard);
    board.appendChild(card);
  });
}

// Kaarten omdraaien
function flipCard() {
  if (this.classList.contains("flipped") || flippedCards.length >= 2) return;

  this.classList.add("flipped");
  this.textContent = this.dataset.name;
  flippedCards.push(this);

  if (flippedCards.length === 2) {
    setTimeout(checkMatch, 800);
  }
}

// Controleren op match
function checkMatch() {
  const [card1, card2] = flippedCards;

  if (card1.dataset.name === card2.dataset.name) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    matchedCards.push(card1, card2);
  } else {
    card1.classList.remove("flipped");
    card2.classList.remove("flipped");
    card1.textContent = "";
    card2.textContent = "";
  }

  flippedCards = [];

  if (matchedCards.length === italianWords.length) {
    setTimeout(() => alert("🎉 Hai vinto! Buon Natale! 🎄"), 500);
  }
}

// Start het spel
createBoard();
