// 장애물과 시작 버튼 요소 선택
const obstacle = document.querySelector(".obstacle");
const startBtn = document.querySelector(".start-btn");

// 시작 버튼 클릭 시 게임 시작
startBtn.addEventListener("click", startGame);

function startGame() {
  // 장애물 랜덤 위치 설정
  obstacle.style.left = Math.random() * 80 + "%";

  // 게임 종료 시간 설정 (2분 후)
  const endTime = new Date().getTime() + 120000;

  // 게임 진행
  const gameInterval = setInterval(function() {
    // 현재 시간 계산
    const currentTime = new Date().getTime();

    // 남은 시간 계산
    const remainingTime = endTime - currentTime;

    // 시간이 남아있으면 장애물 내리기
    if (remainingTime > 0) {
      const obstacleTop = parseInt(getComputedStyle(obstacle).top);
      obstacle.style.top = obstacleTop + 5 + "px";
      
      // 장애물이 바닥에 닿으면 게임 종료
      if (obstacleTop > 95) {
        clearInterval(gameInterval);
        alert("Game Over");
      }
      
      // 장애물과 버튼이 겹치면 게임 종료
      const buttonRect = startBtn.getBoundingClientRect();
      const obstacleRect = obstacle.getBoundingClientRect();
      if (buttonRect.bottom > obstacleRect.top && buttonRect.top < obstacleRect.bottom && buttonRect.right > obstacleRect.left && buttonRect.left < obstacleRect.right) {
        clearInterval(gameInterval);
        alert("Game Over");
      }
    } 
    // 시간이 다 되면 게임 종료
    else {
      clearInterval(gameInterval);
      alert("Game Over");
    }
  }, 10);
}
