$(document).ready(function () {
    $('img').click(function (e) {
        var newClass = $(this).attr("id");
        var oldClass = $("#characters").attr('class');
        $("#characters").fadeOut(function () {
            $("#characters").removeClass(oldClass).addClass(newClass).fadeIn('slow');
        });
        $("#charactersname").text(newClass.charAt(0).toUpperCase() + newClass.slice(1));
        $(this).css("background-color", "#00cc99");

        var characterSelect = $("#characters").attr('class');
        
        if (form === null) {
            alert('Please select a character');
        }
        else {
            document.getElementById("characters").innerHTML = 
            " You have selected " + characterSelect.charAt(0).toUpperCase() + newClass.slice(1);
        }

        var form = document.getElementById("charactersubmit");
    });
});


