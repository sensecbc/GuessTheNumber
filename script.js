'use strict';
//PROJECT#1//
// document.querySelector(".message").textContent -> seleciona a class message no html e depois o .textContent vai buscar o texto qeu está dentro dessa class
/*
document.querySelector('.message').textContent = 'Correct number!'; // muda o conteudo para o q quisermos
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 23;*/ // value é o  valor atribuido a essa class

//

let secretNumber = Math.trunc(Math.random() * 20) + 1; // cria o nr random
//document.querySelector('.number').textContent = secretNumber; // apresenta o random number em vez do ?
let score = 20; // ** criamos uma variável score e damos esta variável o valor 20
let highScore = 0; //variável do highscore

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //o que isto faz é basiacmente, ao clickar no botão "check!" esta função vai loggar o nr na consola
  console.log(guess, typeof guess);

  //quando não há input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!'; //se o valor for invalid (tipo 0) então muda a .message para no number
    //quando o jogador ganha
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber; // apresenta o random number em vez do ?
    document.querySelector('.message').textContent = "you're the winner";
    document.querySelector('body').style.backgroundColor = '#60b347'; //para ter acesso ao CSS entao usamos o .style e depois . o valor que queremos ter acesso (neste caso foi o background color)
    document.querySelector('.number').style.width = '30rem'; // TEM QUE SER SEMPRE NUMA STRING!

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //quando o jogador tem um nr maior q o do jogo
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'wrong, it is too high!';
      score--; // ** sempre que perdemos o score decresce
      document.querySelector('.score').textContent = score; // ** dizemos qual é a parte do html que se igual à variável e a mesma vai entao decrescendo de 20 para 19, etc, enquanto perdermos
    } else {
      document.querySelector('.message').textContent = "you've lost the game";
      document.querySelector('.score').textContent = 0;
    }
    //quando o jogador tem um nr menor q o do jogo
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'wrong, it is too low!';
      score--; // ** sempre que perdemos o score decresce
      document.querySelector('.score').textContent = score; // ** dizemos qual é a parte do html que se igual à variável e a mesma vai entao decrescendo de 20 para 19, etc, enquanto perdermos
    } else {
      document.querySelector('.message').textContent = "you've lost the game";
      document.querySelector('.score').textContent = 0;
    }
  }
});

// botao de play again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
