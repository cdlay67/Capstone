var players = []; //Setting players
players[1] = "Player 2";


var whoseTurn = 1; // Sets player's turn


function toggle() {
    if (whoseTurn) {
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
}

// toggles between the next and submit button
var buttons = $("#charactersubmit, #submitselect").on("click", function () {
    buttons.slideToggle();
    // Save data to the current local storage
    var characters = ['Alex', 'Akuma', 'Balrog', 'Bison', 'Blanka', 'Cammy', 'Chun-li', 'Deejay', 'Dudley', 'Dhalsim',
        'Fei-long', 'Guile', 'Honda', 'Ibuki', 'Ken', 'Makoto', 'Oro', 'Ryu', 'Sagat', 'Skull', 'T-hawk',
        'Vega', 'Yang', 'Yun', 'Zangief'];
});

function changeLink() {
    window.location.replace("selectbg.html");
    localStorage.setItem("characters", JSON.stringify(characters));
}