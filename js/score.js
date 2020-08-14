function score() {
  var score = 0;
  var boardSpaces = document.getElementById("board").getElementsByTagName("li");

  for (var i = 0; i < 7; i++) {
    if (boardSpaces[i].getElementsByClassName("droppable")[0].getElementsByClassName("tile")[0].innerHTML !== '') {
      score += parseInt(boardSpaces[i].getElementsByClassName("droppable")[0].getElementsByClassName("value")[0].innerHTML);
    }
  }

  if (boardSpaces[1].getElementsByClassName("droppable")[0].getElementsByClassName("tile")[0].innerHTML !== '' ||
      boardSpaces[5].getElementsByClassName("droppable")[0].getElementsByClassName("tile")[0].innerHTML !== '')
  {score *= 2}

  $("#scoreHdr").show();
  $("#score").html(score);

}
