const CARDS_CONFIG = [
  { value: 1, colorClass: "colorGroup1" },
  { value: 2, colorClass: "colorGroup2" },
  { value: 3, colorClass: "colorGroup3" },
  { value: 4, colorClass: "colorGroup2" },
  { value: 5, colorClass: "colorGroup3" },
  { value: 6, colorClass: "colorGroup4" },
  { value: 7, colorClass: "colorGroup4" },
  { value: 8, colorClass: "colorGroup1" },
  { value: 9, colorClass: "colorGroup3" },
];

const EMPTY_ARRAY = [];

function sort(list = EMPTY_ARRAY) {
  const sortedLList = list.sort(
    (element1, element2) => element1.value - element2.value
  );
  return sortedLList;
}

function shuffle(list = EMPTY_ARRAY) {
  let currentIterator = list.length;
  let index, temp;

  while (currentIterator > 0) {
    index = Math.floor(Math.random() * currentIterator);

    currentIterator -= 1;

    temp = list[currentIterator];
    list[currentIterator] = list[index];
    list[index] = temp;
  }
  return list;
}

function createCard() {
  const card = document.createElement("li");
  card.classList.add("card");
  return card;
}

function render(grid, list = EMPTY_ARRAY) {
  for (let index = 0; index < list.length; index++) {
    const card = createCard();
    card.innerText = list[index].value;
    card.classList.add(list[index].colorClass);
    grid.appendChild(card);
  }
}

function clearGrid(grid) {
  grid.innerHTML = "";
}

export { sort, shuffle, render, clearGrid, CARDS_CONFIG };
