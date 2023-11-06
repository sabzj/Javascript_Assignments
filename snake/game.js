import {
  update as updatesnake,
  draw as drawsnake,
  SNAKE_SPEED, getSnakeHead, snakeIntersection
} from "./snake.js";

import {update as updateFood, draw as drawFood} from `./food.js`
import {outSideGrid} from ' ./grid.js'


let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById("game board");

function main(currentTime) {
    if (gameOver) {
       if (confirm ('You Lost. Press Ok To restart. ')); {
        window.location = '/'
       }
       return
}  

window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  //   console.log(currentTime);
  lastRenderTime = currentTime;

  update();
  draw();
}
window.requestAnimationFrame(main);

function update() {
  updatesnake();
  updateFood()
  checkDeath()
}

function draw() {
  gameBoard.innerHTML = "";
  drawsnake(gameBoard);
  drawFood (gameBoard)
}

function checkDeath () {
    gameOver = outSideGR(getSnakeHed) || snakeIntersection()
}

