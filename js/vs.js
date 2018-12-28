window.onload = function () { // alerts the user to select a character
    alert('Players please choose your character! Click the next button to start.');
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

function playerOne() {
    confirm("Player 1 please select your character!");
    toggle();
}

