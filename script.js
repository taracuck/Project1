"use strict";

// trying to randomly assign picture to card
let board = document.querySelector(".board");
let resetButton = document.querySelector(".reset-button");
let starterDiv = document.querySelector(".starter-div");
let startButton = document.querySelector(".start-button");

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

let seconds = 100000;
let countdownTimer;
let finalCountdown = false;

const gameTimer = () => {
  // console.log(seconds);
  if (seconds >= 10) {
    document.querySelector(".game-timer").innerHTML = `:${seconds}`;
  } else if (seconds < 10 && seconds > 0) {
    document.querySelector(".game-timer").style.color = "red";
    document.querySelector(".game-timer").innerHTML = `:0${seconds}`;
  }
  if (seconds === 0) {
    // starterDiv.add();
    starterDiv.style.display = "initial";
    document.querySelector(".popUp-p").textContent = "YOU LOST.";
    startButton.textContent = "Try again?";
  }
  seconds--;
};

startButton.addEventListener("click", () => {
  // starterDiv.remove();
  starterDiv.style.display = "none";
  countdownTimer = setInterval(gameTimer, 1000);
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
    let cardFrontDiv = document.createElement("div");
    let cardBackDiv = document.createElement("div");
    cardFrontDiv.classList.add("flip-card-front");
    cardBackDiv.classList.add("flip-card-back");
    let cardFront = document.createElement("img");
    let cardBack = document.createElement("img");
    cardFront.src = imageSources[i].src;
    cardFront.id = imageSources[i].id;
    // cardBack.src = "assets/dynamic-duo-text-01.png";
    cardBack.style.backgroundImage = `url(assets/dynamic-duo-text-01.png)`;
    cardBack.style.backgroundPosition = "center";
    cardBack.style.backgroundSize = "cover";
    cardBack.id = "back";
    cardFrontDiv.append(cardFront);
    cardBackDiv.append(cardBack);
    let flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");
    flipCardInner.append(cardFrontDiv, cardBackDiv);
    let flipCard = document.createElement("div");
    flipCard.append(flipCardInner);
    flipCard.classList.add("flip-card");
    board.append(flipCard);
  }
};

board.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("flip-card") || e.target.id === "back") {
    // e.target.classList.add("flipped");
    // flipCardInner.classList.add("flipped");
    document.querySelector(".flip-card-inner").classList.add("flipped");
  }
});

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
