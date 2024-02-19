let userScore = 0;
let compScore = 0;
let choices = document.querySelectorAll('.choice');
const newUserScore = document.querySelector('#newUserScore');
const newCompScore = document.querySelector('#newCompScore');
const msg = document.querySelector('#msg');
const bgc = document.querySelector('.container-msg');

const winner = (userChoice, compChoice, userWin) => {
  if (userWin) {
    userScore++;
    newUserScore.innerText = userScore;
    msg.innerHTML = `Congratulations! You won this round.`;
    bgc.style.backgroundColor = 'green';
  } else {
    compScore++;
    newCompScore.innerText = compScore;
    msg.innerHTML = `Congratulations! computer won this round.`;
    bgc.style.backgroundColor = 'red';
  }
};

const compGenChoice = () => {
  const options = ['rock', 'paper', 'scissors'];
  let generated = Math.floor(Math.random() * 3);
  return options[generated];
};

const drawGame = () => {
  msg.innerText = 'Game is drawn';
  bgc.style.backgroundColor = '#081b31';
};

const playGame = (userChoice) => {
  const compChoice = compGenChoice();
  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === 'rock') {
      userWin = compChoice == 'paper' ? false : true;
    } else if (userChoice === 'paper') {
      userWin = compChoice === 'scissors' ? false : true;
    } else {
      userWin = compChoice === 'rock' ? false : true;
    }
    winner(userChoice, compChoice, userWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});
