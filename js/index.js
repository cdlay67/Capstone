/* global $ */

alert('please choose a character');


function selectCharacter(){
    var $characters = $('#characters');
    var $this = $(this);
    var newClass = $this.attr('id');
    var oldClass = $characters.attr('class');
    var characterSelect = '';

    $characters.fadeOut(() => $characters
        .removeClass(oldClass)
        .addClass(newClass)
        .fadeIn('slow')
    );

    $('#charactersname').text(newClass.charAt(0).toUpperCase() + newClass.slice(1));
    $this.css('background-color', '#00cc99');

    characterSelect = $('#characters').attr('class');

    document.getElementById('charselect').innerHTML =
            ' You have selected ' + characterSelect.charAt(0).toUpperCase() + newClass.slice(1);
}

$('img').click(selectCharacter);

function goToMenu(){
    window.location = 'menu.html';
}

document
    .querySelector('#charactersubmit')
    .addEventListener('click', goToMenu);