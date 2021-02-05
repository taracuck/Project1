"use strict";

// trying to randomly assign picture to card
let board = document.querySelector(".board");
let resetButton = document.querySelector(".reset-button");
let starterDiv = document.querySelector(".starter-div");
let startButton = document.querySelector(".start-button");
let homeTab = document.querySelector(".home");
let theOfficeTab = document.querySelector(".office");

let defaultImageSources = [
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

let seconds = 30;
let countdownTimer;
let finalCountdown = false;

const gameTimer = () => {
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

const assignPictures = (imageSources) => {
  board.innerHTML = "";
  imageSources = shuffle(imageSources);
  for (let i = 0; i < imageSources.length; i++) {
    // front of card
    let cardFrontDiv = document.createElement("div");
    cardFrontDiv.classList.add("flip-card-front");
    let cardFront = document.createElement("img");
    cardFront.classList.add("image");
    cardFront.src = imageSources[i].src;
    cardFront.id = imageSources[i].id;
    cardFrontDiv.append(cardFront);
    // back of card
    let cardBackDiv = document.createElement("div");
    cardBackDiv.classList.add("flip-card-back");
    let cardBack = document.createElement("img");
    cardBack.classList.add("image");
    cardBack.style.backgroundImage = `url(assets/dynamic-duo-text-01.png)`;
    cardBack.style.backgroundPosition = "center";
    cardBack.style.backgroundSize = "cover";
    cardBack.id = "back";
    cardBackDiv.append(cardBack);
    // flip card inner - holds front and back of cards
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
  if (e.target.classList.contains("image") || e.target.id === "back") {
    e.target.parentNode.parentNode.classList.add("flipped");
  }
});

resetButton.addEventListener("click", () => {
  display(defaultImageSources);
  clearInterval(gameTimer);
  seconds = 30;
  gameTimer();
});

theOfficeTab.addEventListener("click", () => {
  let OfficeImageSources = [
    {
      src: "assets/the-office/andy.jpg",
      id: 1,
    },
    {
      src: "assets/the-office/angela.jpg",
      id: 2,
    },
    {
      src: "assets/the-office/bob.jpg",
      id: 3,
    },
    {
      src: "assets/the-office/dwight.jpg",
      id: 2,
    },
    {
      src: "assets/the-office/erin.jpg",
      id: 1,
    },
    {
      src: "assets/the-office/holly.jpg",
      id: 4,
    },
    {
      src: "assets/the-office/jim.png",
      id: 5,
    },
    {
      src: "assets/the-office/kelly.jpg",
      id: 6,
    },
    {
      src: "assets/the-office/michael.png",
      id: 4,
    },
    {
      src: "assets/the-office/pam.jpg",
      id: 5,
    },
    {
      src: "assets/the-office/phyllis.jpg",
      id: 3,
    },
    {
      src: "assets/the-office/ryan.png",
      id: 6,
    },
  ];
  display(OfficeImageSources);
  clearInterval(gameTimer);
  seconds = 30;
  gameTimer();
});

homeTab.addEventListener("click", () => {
  display(defaultImageSources);
  clearInterval(gameTimer);
  seconds = 30;
  gameTimer();
});

const display = (imageSources) => {
  assignPictures(imageSources);
};

//function ran to display the game
display(defaultImageSources);
