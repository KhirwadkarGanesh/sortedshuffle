// Helpers
import { sort, shuffle, render, clearGrid, CARDS_CONFIG } from "./helpers.js";

// Listeners
function handleShuffle(grid, cards) {
  clearGrid(grid);
  const shuffledCards = shuffle(cards);
  render(grid, shuffledCards);
}

function handleSort(grid, cards) {
  clearGrid(grid);
  const sortedCards = sort(cards);
  render(grid, sortedCards);
}

function addListeners(grid, cards) {
  const shuffleControl = document.getElementById("shuffle");
  const sortControl = document.getElementById("sort");
  shuffleControl.addEventListener("click", () => handleShuffle(grid, cards));
  sortControl.addEventListener("click", () => handleSort(grid, cards));
}

function initialRender(grid, cards) {
  const sortedCards = sort(cards);
  render(grid, sortedCards);
}

function initialise() {
  const cards = [...CARDS_CONFIG];
  const grid = document.getElementsByClassName("grid")[0]; // Here only one grid element is present wrt class Name
  addListeners(grid, cards);
  initialRender(grid, cards);
}

window.onload = initialise;
