/* global $ */
var choices = [];

alert('Players please choose your character! Click the next button to start.');

function selectCharacter(){
    var $characters = $('#characters');
    var $this = $(this);
    var newClass = $this.attr('id');
    var oldClass = $characters.attr('class');
    var characterSelect = '';

    $characters
        .removeClass(oldClass)
        .addClass(newClass)
        .fadeIn('slow');

    $('#charactersname').text(
        newClass.charAt(0).toUpperCase() + newClass.slice(1));

    // Uses new HTML in vs.html
    // Uses new class in vs.css on line 268 .player-select
    const characterId = `${event.target.id}-select`;

    if(choices.length > 0){
        $(`#${characterId}`).append('P2');
    }
    else{
        $(`#${characterId}`).append('P1');
    }

    // Old code replaced with code above
    // Added in new HTML to wrap each character players select in the vs.html file
    // Added 1 new class called .player-select in the vs.css file on line 268
    $this.css('background-color', '#00cc99');

    characterSelect = $('#characters').attr('class');

    document.getElementById('charselect').innerHTML =
        ' You have selected ' +
        characterSelect.charAt(0).toUpperCase() +
        newClass.slice(1);

    choices.push(characterSelect);
}

function performNextAction(){
    if(choices.length < 2){
        confirm(`Player ${choices.length + 1}, choose your character!`);
        $('.grid-container').one('click', 'img', selectCharacter);
    }
    else{
        choices.forEach((choice, index) =>
            localStorage.setItem(`Player${index + 1}`, choice)
        );

        window.location = 'selectbg.html';
    }
}

document
    .querySelector('#charactersubmit')
    .addEventListener('click', performNextAction);

// Player 1 clicks NEXT
// Player 1 prompted to choose a character
// Player 1 chooses character
// Player 1 choice pushed to choices array
// Player n (any number of players, eventually) repeats process
// Player choices stored to localStorage
// Change page to bgSelect```