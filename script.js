"use strict";
let board = document.querySelector(".board");
let resetButton = document.querySelector(".reset-button");
let starterDiv = document.querySelector(".starter-div");
let startButton = document.querySelector(".button");
let generalTab = document.querySelector(".general");
let theOfficeTab = document.querySelector(".office");
let objectsTab = document.querySelector(".objects");
let superheroesTab = document.querySelector(".superheroes");
let clickCounter = document.createElement("array");
let defaultImageSources = [
  {
    src: "assets/general/anna.jpeg",
    id: 1,
  },
  {
    src: "assets/general/bert.jpeg",
    id: 2,
  },
  {
    src: "assets/general/buzz.jpg",
    id: 3,
  },
  {
    src: "assets/general/chewbacca.jpg",
    id: 4,
  },
  {
    src: "assets/general/elsa.jpg",
    id: 1,
  },
  {
    src: "assets/general/ernie.jpg",
    id: 2,
  },
  {
    src: "assets/general/han-solo.jpg",
    id: 4,
  },
  {
    src: "assets/general/luigi.jpg",
    id: 5,
  },
  {
    src: "assets/general/mario.jpg",
    id: 5,
  },
  {
    src: "assets/general/morty.jpg",
    id: 6,
  },
  {
    src: "assets/general/rick.jpg",
    id: 6,
  },
  {
    src: "assets/general/woody.jpg",
    id: 3,
  },
];
let seconds = 45;
let countdownTimer;
let finalCountdown = false;
let cardsRemoved = 0;
let currentlyBeingPlayed = defaultImageSources;
clickCounter = [];

const gameTimer = () => {
  if (seconds >= 10) {
    document.querySelector(".game-timer").innerHTML = `:${seconds}`;
  } else if (seconds < 10 && seconds > 0) {
    document.querySelector(".game-timer").style.color = "red";
    document.querySelector(".game-timer").innerHTML = `:0${seconds}`;
  }
  if (seconds === 0) {
    document.querySelector(".game-timer").innerHTML = `:00`;
    let endDiv = document.createElement("div");
    endDiv.classList.add("end-div");
    let gameOverImg = document.createElement("img");
    gameOverImg.src = "assets/dynamic-duo-loser-01.png";
    gameOverImg.classList.add("game-over-img");
    let gameOverButton = document.createElement("button");
    gameOverButton.classList.add("button");
    gameOverButton.textContent = "Try Again?";
    let gameOverPopUp = document.createElement("div");
    gameOverPopUp.classList.add("game-over");
    gameOverPopUp.append(gameOverImg, gameOverButton);
    endDiv.append(gameOverPopUp);
    document.body.append(endDiv);
    gameOverButton.addEventListener("click", () => {
      display(currentlyBeingPlayed);
      document.querySelector(".game-timer").style.color = "white";
      seconds = 45;
      endDiv.style.display = "none";
      gameTimer();
    });
  }
  seconds--;
};

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
  cardsRemoved = 0;
  board.innerHTML = "";
  imageSources = shuffle(imageSources);
  for (let i = 0; i < imageSources.length; i++) {
    // front of card
    let cardFrontDiv = document.createElement("div");
    cardFrontDiv.classList.add("flip-card-front");
    let cardFront = document.createElement("img");
    cardFront.classList.add("image");
    cardFront.src = imageSources[i].src;
    cardFrontDiv.append(cardFront);
    // back of card
    let cardBackDiv = document.createElement("div");
    cardBackDiv.classList.add("flip-card-back");
    let cardBack = document.createElement("img");
    cardBack.classList.add("card-back");
    cardBack.classList.add("image");
    cardBack.style.backgroundImage = `url(assets/dynamic-duo-text-01.png)`;
    cardBack.style.backgroundPosition = "center";
    cardBack.style.backgroundSize = "cover";
    cardBack.id = imageSources[i].id;
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
  if (e.target.classList.contains("card-back") && clickCounter.length < 2) {
    e.target.parentNode.parentNode.classList.add("flipped");
    clickCounter.push(e.target);
    if (clickCounter.length === 2) {
      setTimeout(() => {
        if (clickCounter[0].id === clickCounter[1].id) {
          clickCounter[0].parentNode.parentNode.style.display = "none";
          clickCounter[1].parentNode.parentNode.style.display = "none";
          cardsRemoved += 2;
          if (cardsRemoved === 12) {
            let endDiv = document.createElement("div");
            endDiv.classList.add("game-over");
            endDiv.style.display = "flex";
            let gameOverTimeP = document.createElement("p");
            gameOverTimeP.textContent = `You finished with ${seconds} seconds to spare!`;
            gameOverTimeP.style.color = "white";
            let gameOverImg = document.createElement("img");
            gameOverImg.src = "assets/dynamic-duo-winner-01.png";
            gameOverImg.classList.add("game-over-img");
            let gameOverButton = document.createElement("button");
            gameOverButton.classList.add("button");
            gameOverButton.textContent = "Try Again?";
            let gameOverInfoDiv = document.createElement("div");
            gameOverInfoDiv.append(gameOverTimeP, gameOverButton);
            endDiv.append(gameOverImg, gameOverInfoDiv);
            document.body.append(endDiv);
            clearInterval(countdownTimer);
            gameOverButton.addEventListener("click", () => {
              display(currentlyBeingPlayed);
              document.querySelector(".game-timer").style.color = "white";
              seconds = 45;
              endDiv.style.display = "none";
              gameTimer();
            });
          }
        } else {
          clickCounter[0].parentNode.parentNode.classList.remove("flipped");
          clickCounter[1].parentNode.parentNode.classList.remove("flipped");
        }
        clickCounter = [];
      }, 1000);
    }

    console.log(e.target);
    console.log(clickCounter);
  }
});

// start button event listener
startButton.addEventListener("click", () => {
  starterDiv.style.display = "none";
  document.querySelector(".game-timer").style.color = "white";
  seconds = 45;
  currentlyBeingPlayed = defaultImageSources;
  countdownTimer = setInterval(gameTimer, 1000);
});

// reset button event listener
resetButton.addEventListener("click", () => {
  display(currentlyBeingPlayed);
  document.querySelector(".game-timer").style.color = "white";
  seconds = 45;
  gameTimer();
});

// office tab event listener
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
  currentlyBeingPlayed = OfficeImageSources;
  display(OfficeImageSources);
  document.querySelector(".game-timer").style.color = "white";
  seconds = 45;
  gameTimer();
});

// objects tab event listener
objectsTab.addEventListener("click", () => {
  let objectsImageSources = [
    {
      src: "assets/objects/eraser.jpg",
      id: 1,
    },
    {
      src: "assets/objects/hammer.jpg",
      id: 2,
    },
    {
      src: "assets/objects/key.jpg",
      id: 3,
    },
    {
      src: "assets/objects/lock.jpg",
      id: 3,
    },
    {
      src: "assets/objects/nail.jpg",
      id: 2,
    },
    {
      src: "assets/objects/pencil.jpeg",
      id: 1,
    },
    {
      src: "assets/objects/remote.jpeg",
      id: 4,
    },
    {
      src: "assets/objects/toilet.jpg",
      id: 5,
    },
    {
      src: "assets/objects/toothbrush.jpeg",
      id: 6,
    },
    {
      src: "assets/objects/toothpaste.jpeg",
      id: 6,
    },
    {
      src: "assets/objects/tp.jpg",
      id: 5,
    },
    {
      src: "assets/objects/tv.jpg",
      id: 4,
    },
  ];
  currentlyBeingPlayed = objectsImageSources;
  display(objectsImageSources);
  document.querySelector(".game-timer").style.color = "white";
  seconds = 45;
  gameTimer();
});

// objects tab event listener
superheroesTab.addEventListener("click", () => {
  let superheroesImageSources = [
    {
      src: "assets/superheroes/antman1.jpg",
      id: 1,
    },
    {
      src: "assets/superheroes/batman.jpg",
      id: 2,
    },
    {
      src: "assets/superheroes/catwoman1.jpg",
      id: 2,
    },
    {
      src: "assets/superheroes/harley-quinn1.jpg",
      id: 3,
    },
    {
      src: "assets/superheroes/ironman1.jpg",
      id: 4,
    },
    {
      src: "assets/superheroes/lois-lane.jpg",
      id: 5,
    },
    {
      src: "assets/superheroes/mary-jane.jpg",
      id: 6,
    },
    {
      src: "assets/superheroes/pepper-potts1.jpg",
      id: 4,
    },
    {
      src: "assets/superheroes/spiderman.jpg",
      id: 6,
    },
    {
      src: "assets/superheroes/superman.jpg",
      id: 5,
    },
    {
      src: "assets/superheroes/the-joker.jpg",
      id: 3,
    },
    {
      src: "assets/superheroes/the-wasp1.jpg",
      id: 1,
    },
  ];
  currentlyBeingPlayed = superheroesImageSources;
  display(superheroesImageSources);
  document.querySelector(".game-timer").style.color = "white";
  seconds = 45;
  gameTimer();
});

// general tab event listener
generalTab.addEventListener("click", () => {
  currentlyBeingPlayed = defaultImageSources;
  display(defaultImageSources);
  document.querySelector(".game-timer").style.color = "white";
  seconds = 45;
  gameTimer();
});

const display = (imageSources) => {
  clearInterval(gameTimer);
  assignPictures(imageSources);
};

//function ran to display the game
display(defaultImageSources);
