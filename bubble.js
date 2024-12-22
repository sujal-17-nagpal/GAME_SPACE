const but = document.querySelectorAll(".but");
const hit = document.querySelector('#hit-box');
const scoreBoard = document.querySelector('#score-box');
let score = 0;
function randomHit() {
    hit.innerText = (Math.floor(Math.random()*9)+1);
}

function randomButtons() {
  but.forEach((button) => {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    button.innerText = randomNumber;
  });
}

  but.forEach((button) => {
    // const randomNumber = Math.floor(Math.random() * 9) + 1;
    // button.innerText = randomNumber;
    button.addEventListener("click", () => {
      console.log("button was clicked with no:" + button.innerText);
      if(button.innerText === hit.innerText){
        score++;
        scoreBoard.innerText = score;
      }
      randomButtons();
      randomHit();
    });
    // randomButtons();
  });


// window.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     randomButtons();
//     randomHit();
//     startTimer();
//     score = 0;
//     scoreBoard.innerText = score;
//   }
// });

// timer

let timer ;
let timeLeft = 60;
const timerBox = document.querySelector('#timer-box');
// startTimer();

function startTimer() {
  timer = setInterval(() => {
      if (timeLeft <= 0) {
          clearInterval(timer);
          alert("Time's up!");
          // Here you can add logic to end the game
      } else {
          timeLeft--;
          document.getElementById('timer').innerText = `Time Left: ${timeLeft}`;
      }
  }, 1000); // Update every second
}

document.getElementById('startButton').addEventListener('click', () => {
  timeLeft = 60; // Reset timer to 60 seconds (or your desired time)
  document.getElementById('timer').innerText = `Time Left: ${timeLeft}`;
  clearInterval(timer); // Clear any existing timer
  startTimer(); // Start the timer
});