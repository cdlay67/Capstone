/* global $ */
var playerOneChoice = localStorage.getItem('Player1');
var playerTwoChoice = localStorage.getItem('Player2');
var popUpWindow;
// do what you want with those choices!

function selectBackground(){
    var $selectbg = $('#selectbg');
    var $this = $(this);
    var newClass = $this.attr('id');
    var oldClass = $selectbg.attr('class');
    var bgSelect = '';

    $selectbg.fadeOut(() => $selectbg
        .removeClass(oldClass)
        .addClass(newClass)
        .fadeIn('slow')
    );

    $('#selectbgname').text(newClass.charAt(0).toUpperCase() + newClass.slice(1));
    $this.css('background-color', '#00cc99');

    bgSelect = $('#selectbg').attr('src', 'spain.jpg');

    document.getElementById('bgselect').innerHTML;
}

$('img').click(selectBackground);

function goToWindown(){
    popUpWindow = window.open();
}

document
    .querySelector('#submitselect')
    .addEventListener('click', goToWindown);