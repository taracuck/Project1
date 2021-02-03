"use strict";

// trying to randomly assign picture to card
let board = document.querySelector(".board");
let resetButton = document.querySelector(".reset-button");
let starterDiv = document.querySelector(".starter-div");
let startButton = document.querySelector(".start-button");
// let imageSources = [
//   "assets/anna.jpeg",
//   "assets/bert.jpeg",
//   "assets/buzz.jpg",
//   "assets/chewbacca.jpg",
//   "assets/elsa.jpg",
//   "assets/ernie.jpg",
//   "assets/han-solo.jpg",
//   "assets/luigi.jpg",
//   "assets/mario.jpg",
//   "assets/morty.jpg",
//   "assets/rick.jpg",
//   "assets/woody.jpg",
// ];
let imageSources = [
  {
    src: "assets/anna.jpeg",
    id: 1,
  },
  {
    src: "assets/bert.jpeg",
    id: 2,
  },
  {
    src: "assets/buzz.jpg",
    id: 3,
  },
  {
    src: "assets/chewbacca.jpg",
    id: 4,
  },
  {
    src: "assets/elsa.jpg",
    id: 1,
  },
  {
    src: "assets/ernie.jpg",
    id: 2,
  },
  {
    src: "assets/han-solo.jpg",
    id: 4,
  },
  {
    src: "assets/luigi.jpg",
    id: 5,
  },
  {
    src: "assets/mario.jpg",
    id: 5,
  },
  {
    src: "assets/morty.jpg",
    id: 6,
  },
  {
    src: "assets/rick.jpg",
    id: 6,
  },
  {
    src: "assets/woody.jpg",
    id: 3,
  },
];

startButton.addEventListener("click", () => {
  starterDiv.remove();
});

// shuffle function
const shuffle = (images) => {
  let currentIndex = images.length,
    temporaryValue,
    randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = images[currentIndex];
    images[currentIndex] = images[randomIndex];
    images[randomIndex] = temporaryValue;
  }
  return images;
};

const assignPictures = () => {
  board.innerHTML = "";
  imageSources = shuffle(imageSources);
  for (let i = 0; i < imageSources.length; i++) {
    let cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    let card = document.createElement("img");
    card.src = imageSources[i].src;
    card.id = imageSources[i].id;
    cardContainer.append(card);
    board.append(cardContainer);
  }
};

const display = () => {
  assignPictures();
};

resetButton.addEventListener("click", () => {
  display();
});

display();

// need to add event listener for two clicks
// cardContainer.addEventListener("click", (e)=>{
//     if (e.target.id ===)
// })
