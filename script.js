"use strict";
let board = document.querySelector(".board");
let resetButton = document.querySelector(".reset-button");
let starterDiv = document.querySelector(".starter-div");
let startButton = document.querySelector(".button");
let generalTab = document.querySelector(".general");
let theOfficeTab = document.querySelector(".office");
let objectsTab = document.querySelector(".objects");
let headerNav = document.querySelector(".header-nav");
let superheroesTab = document.querySelector(".superheroes");
let clickCounter = document.createElement("array");
let endDiv = document.createElement("div");
endDiv.classList.add("end-div");
let gameOverImg = document.createElement("img");
gameOverImg.classList.add("game-over-img");
let gameOverInfoDiv = document.createElement("div");
let gameOverTimeP = document.createElement("p");
gameOverTimeP.classList.add("game-over-time-p");
let gameOverButton = document.createElement("button");
let gameOverPopUp = document.createElement("div");
gameOverButton.textContent = "Try Again?";
gameOverButton.classList.add("button", "game-over-button");
gameOverPopUp.classList.add("game-over");
let previousClick = [];
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
    src: "assets/general/buzz2.png",
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
let objectsImageSources = [
  {
    src: "assets/objects2/eraser.png",
    id: 1,
  },
  {
    src: "assets/objects2/hammer.png",
    id: 2,
  },
  {
    src: "assets/objects2/key.png",
    id: 3,
  },
  {
    src: "assets/objects2/lock.png",
    id: 3,
  },
  {
    src: "assets/objects2/nail.png",
    id: 2,
  },
  {
    src: "assets/objects2/pencil.jpg",
    id: 1,
  },
  {
    src: "assets/objects2/remote.png",
    id: 4,
  },
  {
    src: "assets/objects2/toilet.jpg",
    id: 5,
  },
  {
    src: "assets/objects2/toothbrush.png",
    id: 6,
  },
  {
    src: "assets/objects2/toothpaste.png",
    id: 6,
  },
  {
    src: "assets/objects2/tp.jpg",
    id: 5,
  },
  {
    src: "assets/objects2/tv.jpg",
    id: 4,
  },
];
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
let colorImageSources = [
  {
    src: "assets/colors/black.png",
    id: 1,
  },
  {
    src: "assets/colors/black2.png",
    id: 1,
  },
  {
    src: "assets/colors/coral.jpg",
    id: 2,
  },
  {
    src: "assets/colors/coral2.jpg",
    id: 2,
  },
  {
    src: "assets/colors/dark-blue.png",
    id: 3,
  },
  {
    src: "assets/colors/dark-blue2.png",
    id: 3,
  },
  {
    src: "assets/colors/green.jpg",
    id: 4,
  },
  {
    src: "assets/colors/green2.jpg",
    id: 4,
  },
  {
    src: "assets/colors/light-blue.jpg",
    id: 5,
  },
  {
    src: "assets/colors/light-blue2.jpg",
    id: 5,
  },
  {
    src: "assets/colors/lime-green.jpg",
    id: 6,
  },
  {
    src: "assets/colors/lime-green2.jpg",
    id: 6,
  },
  {
    src: "assets/colors/orange.jpg",
    id: 7,
  },
  {
    src: "assets/colors/orange2.jpg",
    id: 7,
  },
  {
    src: "assets/colors/pastel-purple.jpg",
    id: 8,
  },
  {
    src: "assets/colors/pastel-purple2.jpg",
    id: 8,
  },
  {
    src: "assets/colors/pink.png",
    id: 9,
  },
  {
    src: "assets/colors/pink2.png",
    id: 9,
  },
  {
    src: "assets/colors/purple.jpg",
    id: 10,
  },
  {
    src: "assets/colors/purple2.jpg",
    id: 10,
  },
  {
    src: "assets/colors/red.jpg",
    id: 11,
  },
  {
    src: "assets/colors/red2.jpg",
    id: 11,
  },
  {
    src: "assets/colors/yellow.jpg",
    id: 12,
  },
  {
    src: "assets/colors/yellow2.jpg",
    id: 12,
  },
];
let seconds = 45;
let countdownTimer;
let finalCountdown = false;
let cardsRemoved = 0;
let currentlyBeingPlayed = defaultImageSources;
clickCounter = [];

const gameTimer = () => {
  console.log(seconds);
  if (seconds >= 60) {
    let minute = 1;
    if (seconds - 60 >= 10) {
      document.querySelector(".game-timer").innerHTML = `${minute}:${
        seconds - 60
      }`;
    } else {
      document.querySelector(".game-timer").innerHTML = `${minute}:0${
        seconds - 60
      }`;
    }
  } else if (seconds < 60 && seconds >= 10) {
    document.querySelector(".game-timer").innerHTML = `:${seconds}`;
  } else if (seconds < 10 && seconds > 0) {
    document.querySelector(".game-timer").style.color = "red";
    document.querySelector(".game-timer").innerHTML = `:0${seconds}`;
  }
  if (seconds === 0) {
    clearInterval(countdownTimer);
    document.querySelector(".game-timer").innerHTML = `:00`;
    gameOverImg.src = "assets/dynamic-duo-loser-01.png";
    gameOverPopUp.append(gameOverImg, gameOverButton);
    endDiv.append(gameOverPopUp);
    document.body.append(endDiv);
    endDiv.style.visibility = "visible";
    gameOverButton.addEventListener("click", () => {
      endDiv.style.visibility = "hidden";
      resetGame();
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
    if (currentlyBeingPlayed === colorImageSources) {
      cardFront.classList.add("challenge-image");
    } else {
      cardFront.classList.add("image");
    }
    cardFront.src = imageSources[i].src;
    cardFrontDiv.append(cardFront);
    // back of card
    let cardBackDiv = document.createElement("div");
    cardBackDiv.classList.add("flip-card-back");
    let cardBack = document.createElement("img");
    if (currentlyBeingPlayed === colorImageSources) {
      cardBack.classList.add("card-back", "challenge-image");
    } else {
      cardBack.classList.add("card-back", "image");
    }
    cardBack.style.backgroundImage = `url(assets/dynamic-duo-text-01.png)`;
    cardBack.id = imageSources[i].id;
    cardBackDiv.append(cardBack);
    // flip card inner - holds divs for front and back of cards
    let flipCardInner = document.createElement("div");
    flipCardInner.classList.add("flip-card-inner");
    flipCardInner.append(cardFrontDiv, cardBackDiv);
    let flipCard = document.createElement("div");
    flipCard.append(flipCardInner);
    if (currentlyBeingPlayed === colorImageSources) {
      flipCard.classList.add("challenge-flip-card");
    } else {
      flipCard.classList.add("flip-card");
    }
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
          if (
            currentlyBeingPlayed === colorImageSources &&
            cardsRemoved === 24
          ) {
            clearInterval(countdownTimer);
            if (seconds > 1) {
              gameOverTimeP.textContent = `You finished with ${seconds} seconds to spare!`;
            } else {
              gameOverTimeP.textContent = `You finished with ${seconds} second to spare!`;
            }
            gameOverImg.src = "assets/dynamic-duo-winner-01.png";
            gameOverInfoDiv.append(gameOverTimeP, gameOverButton);
            gameOverPopUp.append(gameOverImg, gameOverInfoDiv);
            endDiv.append(gameOverPopUp);
            document.body.append(endDiv);
            endDiv.style.visibility = "visible";
            gameOverButton.addEventListener("click", () => {
              endDiv.style.visibility = "hidden";
              gameOverPopUp.innerHTML = "";
              endDiv.innerHTML = "";
              resetGame();
            });
          } else if (
            currentlyBeingPlayed !== colorImageSources &&
            cardsRemoved === 12
          ) {
            clearInterval(countdownTimer);
            if (seconds > 1) {
              gameOverTimeP.textContent = `You finished with ${seconds} seconds to spare!`;
            } else {
              gameOverTimeP.textContent = `You finished with ${seconds} second to spare!`;
            }
            gameOverImg.src = "assets/dynamic-duo-winner-01.png";
            gameOverInfoDiv.append(gameOverTimeP, gameOverButton);
            gameOverPopUp.append(gameOverImg, gameOverInfoDiv);
            endDiv.append(gameOverPopUp);
            document.body.append(endDiv);
            endDiv.style.visibility = "visible";
            gameOverButton.addEventListener("click", () => {
              endDiv.style.visibility = "hidden";
              gameOverPopUp.innerHTML = "";
              endDiv.innerHTML = "";
              resetGame();
            });
          }
        } else {
          clickCounter[0].parentNode.parentNode.classList.remove("flipped");
          clickCounter[1].parentNode.parentNode.classList.remove("flipped");
        }
        clickCounter = [];
      }, 1000);
    }
  }
});

const resetGame = () => {
  clearInterval(countdownTimer);
  display(currentlyBeingPlayed);
  document.querySelector(".game-timer").style.color = "white";
  if (currentlyBeingPlayed === colorImageSources) {
    seconds = 90;
  } else {
    seconds = 45;
  }
  countdownTimer = setInterval(gameTimer, 1000);
};

// start button event listener
startButton.addEventListener("click", () => {
  starterDiv.style.display = "none";
  generalTab.classList.add("red");
  document.querySelector(".game-timer").style.color = "white";
  seconds = 45;
  currentlyBeingPlayed = defaultImageSources;
  countdownTimer = setInterval(gameTimer, 1000);
});

// reset button event listener
resetButton.addEventListener("click", () => {
  resetGame();
});

headerNav.addEventListener("click", (e) => {
  clearInterval(countdownTimer);
  if (e.target.classList.contains("tab")) {
    if (previousClick.length === 1) {
      previousClick[0].classList.remove("red");
      previousClick = [];
    } else if (previousClick.length === 0) {
      generalTab.classList.remove("red");
    }
    previousClick.push(e.target);
    e.target.classList.add("red");
    if (e.target.classList.contains("general")) {
      currentlyBeingPlayed = defaultImageSources;
    } else if (e.target.classList.contains("office")) {
      currentlyBeingPlayed = OfficeImageSources;
    } else if (e.target.classList.contains("objects")) {
      currentlyBeingPlayed = objectsImageSources;
    } else if (e.target.classList.contains("superheroes")) {
      currentlyBeingPlayed = superheroesImageSources;
    } else if (e.target.classList.contains("colors")) {
      currentlyBeingPlayed = colorImageSources;
    }
  }
  resetGame();
});

const display = (imageSources) => {
  clearInterval(gameTimer);
  assignPictures(imageSources);
};

//function ran to display the game
display(defaultImageSources);
