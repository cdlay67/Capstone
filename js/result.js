var playerOneChoice = localStorage.getItem('Player1');
var playerTwoChoice = localStorage.getItem('Player2');
var selectBackground = localStorage.getItem('background');

var p1 = document.getElementById('player1');
var p2 = document.getElementById('player2');
var background = document.getElementById('background');


p1.innerHTML = ` <img id="Player1" alt="" src="../images/${playerOneChoice}/${playerOneChoice}.png" />`;

p2.innerHTML = ` <img id="Player2" alt="" src="../images/${playerTwoChoice}/${playerTwoChoice}.png" />`;

background.innerHTML = ` <img id="background" alt="" src="../${selectBackground}" />`;

                                    