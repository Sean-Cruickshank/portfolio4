let plateArray = [];
let grid = {x: 1, y: 1}
let playerPos = randomPos();
let goalPos = randomPos();
let score = 0
let highScore = localStorage.getItem('highscore') | 0;

function randomPos() {
  let x = Math.ceil(Math.random() * 12);
  let y = Math.ceil(Math.random() * 12);
  return {x, y}
}

function setValues() {
  grid.x = 1;
  grid.y = 1;
  playerPos = randomPos();
  goalPos = randomPos();
  plateArray = [];

  for (let i = 0; i < 144; i++) {
    const ranNum = (Math.random().toFixed(2)) * 100;
    let isGrey = false;
    if (ranNum <= 20) {
      if (grid.x === playerPos.x && grid.y === playerPos.y) {
        isGrey = false;
      } else if (grid.x === goalPos.x && grid.y === goalPos.y) {
        isGrey = false;
      } else {
        isGrey = true;
      }
      
    }
    if (grid.x < 12) {
      plateArray.push({grey: isGrey, x: grid.x, y: grid.y})
      grid.x++;
    } else if (grid.x === 12) {
      plateArray.push({grey: isGrey, x: grid.x, y: grid.y})
      grid.x = 1;
      grid.y++;
    }
  }
}

function plateCreator(icon, x, y) {
  if (icon === 'floor' || icon === 'wall') {
    if (score < 5) {
      return `<div class="plate ${icon}-one"></div>`
    } else if (score >= 5 && score < 10) {
      return `<div class="plate ${icon}-two"></div>`
    } else if (score >= 10 && score < 15) {
      return `<div class="plate ${icon}-three"></div>`
    } else if (score >= 15 && score < 20) {
      return `<div class="plate ${icon}-four"></div>`
    } else if (score >= 20) {
      return `<div class="plate ${icon}-five"></div>`
    }
  } else {
    return `<div class="plate ${icon}"></div>`
  }
  
}

const gameElement = document.querySelector('.js-game');

const selectElement = document.querySelector('.js-colour-select');
console.log(selectElement.value)

const playerColour = 'orange'

function renderGrid() {
  let gameElementHTML = '';
  plateArray.forEach((plate) => {
    if (plate.grey) {
      gameElementHTML += plateCreator('wall', plate.x, plate.y)
    } else if (plate.x === playerPos.x && plate.y === playerPos.y) {
      gameElementHTML += plateCreator(`player-icon player-icon-${selectElement.value}`, plate.x, plate.y)
    } else if (plate.x === goalPos.x && plate.y === goalPos.y) {
      gameElementHTML += plateCreator('key', plate.x, plate.y)
    } else {
      gameElementHTML += plateCreator('floor', plate.x, plate.y)
    }
  })
  gameElement.innerHTML = gameElementHTML;
  renderScores()
  if (playerPos.x === goalPos.x && playerPos.y === goalPos.y) {
    score+= 1;
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('highscore', highScore)
    }
    setValues()
    renderGrid()
  }
}

function renderScores() {
  const scoreElement = document.querySelector('.js-score');
  const highScoreElement = document.querySelector('.js-high-score');
  scoreElement.innerHTML = `Score: ${score}`;
  highScoreElement.innerHTML = `High Score: ${highScore}`
}

setValues();
renderGrid();

let gameActive = false;
let timer = 300

const endMessageElement = document.querySelector('.js-end-message')

function playGame() {
  const startGameButtonElement = document.querySelector('.js-start-game-button');
  const stopGameButtonElement = document.querySelector('.js-stop-game-button');
  const tipElement = document.querySelector('.js-tip');
  const resetHighScoreButton = document.querySelector(".reset-score-button");
  tipElement.classList.remove('hidden');
  startGameButtonElement.classList.add('hidden');
  stopGameButtonElement.classList.remove('hidden');
  setValues();
  renderGrid();
  gameActive = true
  const clock = setInterval(() => {
    if (timer > 0) {
      timer--;
      const timerElement = document.querySelector('.js-timer');
      timerElement.innerHTML = `${(timer / 10).toFixed(1)}`
      endMessageElement.classList.add('hidden')
      selectElement.disabled = true;
      selectElement.classList.add('button-disabled')
      resetHighScoreButton.disabled = true
      resetHighScoreButton.classList.add('button-disabled')
    } else {
      setColourPicker()
      selectElement.disabled = false;
      selectElement.classList.remove('button-disabled')
      resetHighScoreButton.disabled = false
      resetHighScoreButton.classList.remove('button-disabled')
      startGameButtonElement.classList.remove('hidden');
      stopGameButtonElement.classList.add('hidden');
      endMessageElement.classList.remove('hidden')
      tipElement.classList.add('hidden');
      generateEndMessage()
      score = 0
      gameActive = false
      clearInterval(clock)
      timer = 300;
    }
  }, 100)
}

function killTimer() {
  timer = 1;
}

function generateEndMessage() {
  let endMessage = '';
  if (score === highScore) {
    endMessage = 'Well done, that\'s an impressive score!'
  } else if (highScore - score < 3) {
    endMessage = 'So close! You almost made it!'
  } else if (highScore - score >= 3) {
    endMessage = 'Better luck next time!'
  }
//   return `Game over! ${endMessage}
// Your score: ${score}
// High score: ${highScore}`

endMessageElement.innerHTML =
  `
    <div>
      <h2>Game over!</h2>
      <p class="end-message-message">${endMessage}</p>
      <p
        class="end-message-score"
      >Your score: ${score}</p>
      <p
        class="end-message-score"
      >High score: ${highScore}</p>
      <button
        class="tg-button"
        onclick="document.querySelector('.js-end-message').classList.add('hidden')"
      >Close</button>
    </div>
  `
}


function closeEndMessage() {
  endMessageElement.classList.add('hidden')
  console.log('test')
}

function resetHighScore() {
  highScore = 0;
  localStorage.setItem('highscore', highScore)
  renderScores()
}

function movePos(direction) {
  if (playerPos.x > 1 && direction === 'ArrowLeft') {
    if (checkPos(direction)) {
      playerPos.x --;
      renderGrid()
    }
  } else if (playerPos.x < 12 && direction === 'ArrowRight') {
    if (checkPos(direction)) {
      playerPos.x ++;
      renderGrid()
    }
  } else if (playerPos.y > 1 && direction === 'ArrowUp') {
    if (checkPos('ArrowUp')) {
      playerPos.y--
      renderGrid()
    }
  } else if (playerPos.y < 12 && direction === 'ArrowDown') {
    if (checkPos('ArrowDown')) {
      playerPos.y++
      renderGrid()
    }
  }
}

addEventListener('keydown', (input) => {
  if (gameActive) {
    movePos(input.key);
    if (input.key === 'Enter') {
      setValues();
      renderGrid();
    }
  }
})

function checkPos(move) {
  let result = true;
  plateArray.forEach((plate) => {
    if (move === 'ArrowLeft' && plate.x === playerPos.x - 1 && plate.y === playerPos.y) {
      if (plate.grey) result = false
    } else if (move === 'ArrowRight' && plate.x === playerPos.x + 1 && plate.y === playerPos.y) {
      if (plate.grey) result = false
    } else if (move === 'ArrowUp' && plate.x === playerPos.x && plate.y === playerPos.y - 1) {
      if (plate.grey) result = false
    } else if (move === 'ArrowDown' && plate.x === playerPos.x && plate.y === playerPos.y + 1) {
      if (plate.grey) result = false
    }
  })
  return result
}

function setColourPicker() {
selectElement.innerHTML = `
  <select class="colour-select js-colour-select" name="colour" id="colour-select">
    <option value="blue">Blue</option>
    <option value="red">Red</option>
    <option value="yellow">Yellow</option>
    <option value="green">Green</option>
    ${highScore >= 10
      ? `<option value="teal">Teal</option>`
      : `<option disabled value="teal">Teal (required score: 10)</option>`}
    ${highScore >= 15
      ? `<option value="orange">Orange</option>`
      : `<option disabled value="orange">Orange (required score: 15)</option>`}
    ${highScore >= 20
      ? `<option value="purple">Purple</option>`
      : `<option disabled value="purple">Purple (required score: 20)</option>`}
  </select>
`
}

setColourPicker()
