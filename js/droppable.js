// email: sean_boullianne@student.uml.edu

function makeDroppable() {
  $(".droppable").droppable({
    drop: function(event, ui) {
      // update space with tile data
      $(this).find("div.tile").html(ui.draggable.find("div.letter").html());
      $(this).find("div.value").html(ui.draggable.find("div.value").html());

      // update current hand
      var index = currentHand.indexOf(ui.draggable.find("div.letter").html());
      currentHand.splice(index, 1);

      // do not allow user to place another tile on this space
      $(this).droppable("disable");
    }
  });
}
