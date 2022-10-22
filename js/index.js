// Helpers
import { sort, shuffle, render, clearGrid, CARDS_CONFIG } from "./helpers.js";

// Listeners
const handleShuffle = (grid, cards) => {
  clearGrid(grid);
  const shuffledCards = shuffle(cards);
  render(grid, shuffledCards);
};

const handleSort = (grid, cards) => {
  clearGrid(grid);
  const sortedCards = sort(cards);
  render(grid, sortedCards);
};

function loadScreen() {
  const cards = [...CARDS_CONFIG];

  const grid = document.getElementsByClassName("grid")[0];

  const shuffleControl = document.getElementById("shuffle");
  const sortControl = document.getElementById("sort");

  shuffleControl.addEventListener("click", () => handleShuffle(grid, cards));
  sortControl.addEventListener("click", () => handleSort(grid, cards));

  const sortedCards = sort(cards);
  render(grid, sortedCards);
}

window.onload = loadScreen;
