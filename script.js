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
  