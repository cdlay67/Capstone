window.onload = function () {
    alert('please choose a character');
}

$(document).ready(function () {
    $('img').click(function (e) {
        var newClass = $(this).attr("id");
        var oldClass = $("#characters").attr('class');
        $("#characters").fadeOut(function () {
            $("#characters").removeClass(oldClass).addClass(newClass).fadeIn('slow');
        });
        $("#charactersname").text(newClass.charAt(0).toUpperCase() + newClass.slice(1));
        $(this).css("background-color", "#00cc99");

        var characterSelect = document.getElementById('characters');

        var button = document.getElementById('charactersubmit');

        button.onclick = function () {

            if (characterSelect.className === "select") {
                // if the character is not selected display error
                characterSelect.className = "";
                alert('You have not selected a character please choose a character!');
                // selects character and displays you have selected......
            } else {
                characterSelect.className = "select";
                button.onclick = document.getElementById("charselect").innerHTML =
                    " You have selected " + characterSelect.charAt(0).toUpperCase() + newClass.slice(1);
            }
        }
    });
});


/* var characterArry = {
    "Alex": {
        "name": "Alex",
        "id": "alex",
        "occupation": "fighter"
    },
    "Akuma": {
        "name": "Akuma",
        "id": "akuma",
        "occupation": "fighter"
    },
    "Balrog": { 
        "name": "Balrog",
        "id": "balrog",
        "occupation": "fighter"
    },
    "Bison": {
        "name": "M. Bison",
        "id": "bison",
        "occupation": "fighter"
    },
    "Blanka": {
        "name": "Blanka",
        "id": "blanka",
        "occupation": "fighter"
    },
    "Cammy": {
        "name": "Cammy",
        "id": "cammy",
        "occupation": "fighter"
    },
    "Chun Li": {
        "name": "Chun Li",
        "id": "chun-li",
        "occupation": "fighter"
    },
    "Deejay": {
        "name": "Deejay",
        "id": "deejay",
        "occupation": "fighter"
    },
    "Dhalsim": {
        "name": "Dhalsim",
        "id": "dhalsim",
        "occupation": "fighter"
    },
    "Dudley": {
        "name": "Dudley",
        "id": "dudley",
        "occupation": "fighter"
    },
    "Fei-long": {
        "name": "Fei-long",
        "id": "fei-long",
        "occupation": "fighter"
    },
    "Guile": {
        "name": "Guile",
        "id": "guile",
        "occupation": "fighter"
    },
    "Guy": {
        "name": "Guy",
        "id": "guy",
        "occupation": "fighter"
    },
    "Honda": {
        "name": "Honda",
        "id": "honda",
        "occupation": "fighter"
    },
    "Ibuki": {
        "name": "Ibuki",
        "id": "Ibuki",
        "occupation": "fighter"
    },
    "Ken": {
        "name": "Ken",
        "id": "ken",
        "occupation": "fighter"
    },
    "Makoto": {
        "name": "Makoto",
        "id": "makoto",
        "occupation": "fighter"
    },
    "Oro": {
        "name": "Oro",
        "id": "oro",
        "occupation": "fighter"
    },
    "Ryu": {
        "name": "Ryu",
        "id": "ryu",
        "occupation": "fighter"
    },
    "Sagat": {
        "name": "Sagat",
        "id": "sagat",
        "occupation": "fighter"
    },
    "Skull": {
        "name": "Skull",
        "id": "skull",
        "occupation": "fighter"
    },
    "T-Hawk": {
        "name": "T-Hawk",
        "id": "thawk",
        "occupation": "fighter"
    },
    "Vega": {
        "name": "Vega",
        "id": "vega",
        "occupation": "fighter"
    },
    "Yang": {
        "name": "Yang",
        "id": "yang",
        "occupation": "fighter"
    },
    "Yun": {
        "name": "Yun",
        "id": "yun",
        "occupation": "fighter"
    },
    "Zangief": {
        "name": "Zangief",
        "id": "zangief",
        "occupation": "fighter"
    }
}; */