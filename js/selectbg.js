/* global $ */
var playerOneChoice = localStorage.getItem('Player1');
var playerTwoChoice = localStorage.getItem('Player2');
// do what you want with those choices!


function selectBackground(){
    var $selectbg = $('#selectbg');
    var $this = $(this);
    var newClass = $this.attr('id');
    var oldClass = $selectbg.attr('class');

    localStorage.setItem('background', $this.attr('src'));

    $selectbg.fadeOut(() => $selectbg
        .removeClass(oldClass)
        .addClass(newClass)
        .fadeIn('slow')
    );

    $('#selectbgname').text(newClass.charAt(0).toUpperCase() + newClass.slice(1));
    $this.css('background-color', '#00cc99');
}

$('img').click(selectBackground);

function goToSubmit(){
    window.location = 'result.html';
}

document
    .querySelector('#submitselect')
    .addEventListener('click', goToSubmit);

$('audio').remove();
$('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="./music/Recording (14).m4a"  type="audio/ogg"> </audio>');

