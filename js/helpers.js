const CARDS_CONFIG = [
  { value: 1, colorClassName: "colorGroup1" },
  { value: 2, colorClassName: "colorGroup2" },
  { value: 3, colorClassName: "colorGroup3" },
  { value: 4, colorClassName: "colorGroup2" },
  { value: 5, colorClassName: "colorGroup3" },
  { value: 6, colorClassName: "colorGroup4" },
  { value: 7, colorClassName: "colorGroup4" },
  { value: 8, colorClassName: "colorGroup1" },
  { value: 9, colorClassName: "colorGroup3" },
];

const EMPTY_ARRAY = Object.seal([]);

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

function makeCard(index, list) {
  const card = document.createElement("li");
  card.innerText = list[index].value;
  card.classList.add("card", list[index].colorClassName);

  return card;
}

function render(grid, list = EMPTY_ARRAY) {
  for (let index = 0; index < list.length; index++) {
    const card = makeCard(index, list);
    grid.appendChild(card);
  }
}

function clearGrid(grid) {
  grid.innerHTML = "";
}

export { sort, shuffle, render, clearGrid, CARDS_CONFIG };
