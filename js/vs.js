```function performNextAction() {
    if (choices.length < 2) {
      confirm(`Player ${choices.length + 1}, choose your character!`);
      $(".grid-container").one("click", "img", selectCharacter);
    } else {
      choices.forEach((choice, index) =>
        localStorage.setItem(`Player${index + 1}`, choice),
      );
  
      window.location = "selectbg.html";
    }
  }```
  Notice this   if (choices.length < 2) {
  When I use that same logic in your function above to see which players turn it is, I have to check for
   if (choices.length > 0)
  To see if it is player 2 turn
  If you notice issues when you expecting player 2 and keep getting 1 that is probably why
  
  Damian Clay-Downing [12:19 AM]
  Oh ok that makes senses. When I was doing the button click function it would p2 for both player 1 and 2
  
  Nick Diaz [12:19 AM]
  Ya that is why
  Remember, arrays start at 0
  So when you have 2 players in an array, the max it can be is 1
  1 would === 2nd player in that case.
  Hey I tried to push the new code back to your repo but I cant
  How do you want me to send it to you since I am not a contributor to your repo?
  
  Damian Clay-Downing [12:20 AM]
  Ah ok. I some times forget that
  
  Nick Diaz [12:20 AM]
  1 sec
  vs.js
  ```/* global $ */
  var choices = [];
  
  alert("Players please choose your character! Click the next button to start.");
  
  function selectCharacter() {
    var $characters = $("#characters");
    var $this = $(this);
    var newClass = $this.attr("id");
    var oldClass = $characters.attr("class");
    var characterSelect = "";
  
    $characters
      .removeClass(oldClass)
      .addClass(newClass)
      .fadeIn("slow");
  
    $("#charactersname").text(
      newClass.charAt(0).toUpperCase() + newClass.slice(1),
    );
  
    // New code from Nick
    // Uses new HTML in vs.html
    // Uses new class in vs.css on line 268 .player-select
    const characterId = `${event.target.id}-select`;
    if (choices.length > 0) {
      $(`#${characterId}`).append("P2");
    } else {
      $(`#${characterId}`).append("P1");
    }
  
    // Old code replaced with code above
    // Added in new HTML to wrap each chacter players select in the vs.html file
    // Added 1 new class called .player-select in the vs.css file on line 268
    //   $this
    //     .css("background-color", "#00cc99")
    //     ..getElementsByClassName("button::after").innerHTML = "P1";
  
    characterSelect = $("#characters").attr("class");
  
    document.getElementById("charselect").innerHTML =
      " You have selected " +
      characterSelect.charAt(0).toUpperCase() +
      newClass.slice(1);
  
    choices.push(characterSelect);
  }
  
  function performNextAction() {
    if (choices.length < 2) {
      confirm(`Player ${choices.length + 1}, choose your character!`);
      $(".grid-container").one("click", "img", selectCharacter);
    } else {
      choices.forEach((choice, index) =>
        localStorage.setItem(`Player${index + 1}`, choice),
      );
  
      window.location = "selectbg.html";
    }
  }
  
  document
    .querySelector("#charactersubmit")
    .addEventListener("click", performNextAction);
  
  // Player 1 clicks NEXT
  // Player 1 prompted to choose a character
  // Player 1 chooses character
  // Player 1 choice pushed to choices array
  // Player n (any number of players, eventually) repeats process
  // Player choices stored to localStorage
  // Change page to bgSelect```