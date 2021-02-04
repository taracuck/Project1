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

let isWaiting = false;
let isRunning = false;
let seconds = 30;
let countdownTimer;
let finalCountdown = false;

function GameTimer() {
  if(seconds > 0){
    document.querySelector("game-timer").innerHTML = `:${remainingSeconds}`
  } if(seconds === 0){

  }
  // let minutes = Math.round((seconds - 30) / 60);
  // let remainingSeconds = seconds % 60;
//   if (remainingSeconds < 10) {
//     remainingSeconds = "0" + remainingSeconds;
//   }
//   document.querySelector("game-timer").innerHTML = `:${remainingSeconds}`
//   if (seconds == 0) {
//     isRunning = true;
//     seconds += 2;

//     if (finalCountdown) {
//       clearInterval(countdownTimer); // Clear the interval to stop the loop
//     } else {
//       finalCountdown = true; // This will allow the 2 additional seconds only once.
//     }
//   } else {
//     isWaiting = true;
//     seconds--;
//   }
// }
countdownTimer = setInterval(GameTimer, 1000); // Pass function reference, don't invoke it.

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
    let cardFrontDiv = document.createElement("div");
    let cardBackDiv = document.createElement("div");
    cardFrontDiv.classList.add("card-container", "flip-card-front");
    cardBackDiv.classList.add("card-container", "flip-card-back");
    let cardFront = document.createElement("img");
    let cardBack = document.createElement("img");
    cardFront.src = imageSources[i].src;
    cardFront.id = imageSources[i].id;
    cardBack.src = "assets/dynamic-duo-text.svg";
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
  if (e.target.classList.contains("flip-card")) {
    console.log("click");
    cardFrontDiv.style.display = "initial";
    flipCardInner.style.transform = "rotateY(180deg)";
  }
});

const display = () => {
  assignPictures();
};

resetButton.addEventListener("click", () => {
  display();
});

display();