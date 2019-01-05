/* global $ */
var playerOneChoice = localStorage.getItem('Player1');
var playerTwoChoice = localStorage.getItem('Player2');
// do what you want with those choices!


function selectBackground(){
    var $selectbg = $('#selectbg');
    var $this = $(this);
    var newClass = $this.attr('id');
    var oldClass = $selectbg.attr('class');
    var characterSelect = '';

    $selectbg.fadeOut(() => $selectbg
        .removeClass(oldClass)
        .addClass(newClass)
        .fadeIn('slow')
    );

    $('#selectbgname').text(newClass.charAt(0).toUpperCase() + newClass.slice(1));
    $this.css('background-color', '#00cc99');

    characterSelect = $('#selectbg').attr('src', '../imagess');

    document.getElementById('bgselect').innerHTML =
            ' You have selected ' + characterSelect.toUpperCase();
}

$('img').click(selectBackground);
function goToSubmit(){
    
}

document
    .querySelector('#submitselect')
    .addEventListener('click', goToSubmit);