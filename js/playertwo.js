function playerTwo() {
    confirm("Player 2 please select your character!");
    toggle();
}

var players = []; //Setting players
players[1] = "Player 2";


var whoseTurn = 0; // Sets player's turn

function toggle() {
    if (whoseTurn == 0) {
        whoseTurn = 1;
    }
    document.getElementById("game-message").innerText = players[whoseTurn];

}

var button = document.querySelectorAll('img.button'); //selects one character button and disables the rest of the buttons
for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (event) {
        var otherButtons = document.querySelectorAll('img.button:not(#' + event.target.getAttribute('id') + ')');
        for (var j = 0; j < otherButtons.length; j++) {
            otherButtons[j].style.pointerEvents = 'none';
        }
    });
    // Save data to the current local storage
    var characters = document.getElementsByClassName("akuma");

    localStorage.setItem("characters", JSON.stringify(characters));
};