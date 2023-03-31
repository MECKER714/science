const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const upBtn = document.getElementById("up-btn");
const downBtn = document.getElementById("down-btn");
const score = document.getElementById("score");

let playerY = 225;
let obstacleX = 400;
let playerSpeed = 10;
let obstacleSpeed = 5;
let gameScore = 0;
let gameInterval;

function movePlayerUp() {
  playerY -= playerSpeed;
  if (playerY < 0) {
    playerY = 0;
  }
  player.style.top = playerY + "px";
}

function movePlayerDown() {
  playerY += playerSpeed;
  if (playerY > 450) {
    playerY = 450;
  }
  player.style.top = playerY +

function moveObstacle() {
    obstacleX -= obstacleSpeed;
    if (obstacleX < 0) {
      obstacleX = 400;
      gameScore += 1;
      score.textContent = gameScore;
    }
    obstacle.style.left = obstacleX + "px";
  }
  
  function checkCollision() {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();
    return !(
      playerRect.bottom < obstacleRect.top ||
      playerRect.top > obstacleRect.bottom ||
      playerRect.right < obstacleRect.left ||
      playerRect.left > obstacleRect.right
    );
  }
  
  function gameOver() {
    clearInterval(gameInterval);
    alert("게임 오버! 다시 시작하세요.");
    location.reload();
  }
  
  function gameLoop() {
    if (checkCollision()) {
      gameOver();
    } else {
      moveObstacle();
    }
  }
  
  upBtn.addEventListener("click", movePlayerUp);
  downBtn.addEventListener("click", movePlayerDown);
  
  gameInterval = setInterval(gameLoop, 50);
  let gameInterval;
let gameScore = 0;
let playerY = 200;
let obstacleX = 400;
const obstacleSpeed = 5;
const obstacleGap = 120; // 장애물 사이 간격
const minObstacleY = 50; // 장애물이 내려오는 최소 Y 좌표
const maxObstacleY = 310; // 장애물이 내려오는 최대 Y 좌표
const timeLimit = 120; // 게임 시간 제한 (초)
let timeRemaining = timeLimit;

const player = document.querySelector(".player");
const obstacle = document.querySelector(".obstacle");
const upBtn = document.querySelector("#up-btn");
const downBtn = document.querySelector("#down-btn");
const startBtn = document.querySelector("#start-btn");
const score = document.querySelector("#score");
const timeRemainingElem = document.querySelector("#time-remaining");

function movePlayerUp() {
  if (playerY > 0) {
    playerY -= 10;
    player.style.top = playerY + "px";
  }
}

function movePlayerDown() {
  if (playerY < 360) {
    playerY += 10;
    player.style.top = playerY + "px";
  }
}

function moveObstacle() {
  obstacleX -= obstacleSpeed;
  if (obstacleX < -40) {
    obstacleX = 400;
    const obstacleY =
      Math.floor(Math.random() * (maxObstacleY - minObstacleY + 1)) +
      minObstacleY;
    obstacle.style.top = obstacleY + "px";
    gameScore += 1;
    score.textContent = gameScore;
  }
  obstacle.style.left = obstacleX + "px";
}

function checkCollision() {
  const playerRect = player.getBoundingClientRect();
  const obstacleRect = obstacle.getBoundingClientRect();
  return !(
    playerRect.bottom < obstacleRect.top ||
    playerRect.top > obstacleRect.bottom ||
    playerRect.right < obstacleRect.left ||
    playerRect.left > obstacleRect.right
  );
}

function gameOver()

  