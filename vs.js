window.onload = function () { // alerts the user to select a character
    alert('Players please choose your character');
}

var players = [0, 1];
players[0] = "Player 1";
players[1] = "Player 2";

var whoseTurn = 0;

function toggle() {
    if (whoseTurn == 0) {
        whoseTurn = 1;
    }
    else {
        whoseTurn = 0;
    }

    document.getElementById("game-message").innerText = players[whoseTurn];
}

$(document).ready(function () {
    $('img').click(function () {
        var newClass = $(this).attr("id");
        var oldClass = $("#characters").attr('class');
        $("#characters").fadeOut(function () {
            $("#characters").removeClass(oldClass).addClass(newClass).fadeIn('slow');
        });
        $("#charactersname").text(newClass.charAt(0).toUpperCase() + newClass.slice(1));
        $(this).css("background-color", "#00cc99");
        var characterSelect = $("#characters").attr('class');
        document.getElementById("charselect").innerHTML = " You have selected " + characterSelect.charAt(0).toUpperCase() + newClass.slice(1);
    });
});

function myFunction() {
    confirm("Player 1 please select your character!");
}
