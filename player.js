
/*function selectPlayerOne() {
    var characters = ['Alex', 'Akuma', 'Balrog', 'Bison', 'Blanka', 'Cammy', 'Chun-li', 'Deejay', 'Dudley', 'Dhalsim',
    'Fei-long', 'Guile', 'Honda', 'Ibuki', 'Ken', 'Makoto', 'Oro', 'Ryu', 'Sagat', 'Skull', 'T-hawk',
    'Vega', 'Yang', 'Yun', 'Zangief'];

    localStorage.setItem("characters", JSON.stringify(characters));
    characters[0] = ("It's now Player 2's turn");
    characters = JSON.parse(localStorage.getItem("character"));
}

document.getElementById("charactersubmit")*/
var charSelect = [

    akuma = document.getElementById("akuma"),

    alex = document.getElementById("alex"),

    balrog = document.getElementById("balrog"),

    bison = document.getElementById("bison"),

    blanka = document.getElementById("blanka"),

    cammy = document.getElementById("cammy"),

    chunli = document.getElementById("chun-li"),

    deejay = document.getElementById("deejay"),

    dhalism = document.getElementById("dhalism"),

    dudley = document.getElementById("dudley"),

    feilong = document.getElementById("fei-long"),

    guile = document.getElementById("guile"),

    guy = document.getElementById("guy"),

    honda = document.getElementById("honda"),

    ibuki = document.getElementById("ibuki"),

    ken = document.getElementById("ken"),

    makoto = document.getElementById("makoto"),

    ryu = document.getElementById("ryu"),

    oro = document.getElementById("oro"),

    sagat = document.getElementById("sagat"),

    skull = document.getElementById("skull"),

    thawk = document.getElementById("thawk"),

    yang = document.getElementById("yang"),

    yun = document.getElementById("yun")
]

var button = document.querySelectorAll('img.button');

for (var i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
        var otherButtons = document.querySelectorAll('img.button:not(#' + e.target.getAttribute('id') + ')')
        for (var j = 0; j < otherButtons.length; j++) {
            otherButtons[j].style.pointerEvents = 'none';
        }
    });
}