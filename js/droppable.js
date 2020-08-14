$(".droppable").droppable({
  drop: function(event, ui) {
    $(this).find("div.tile").html(ui.draggable.find("div.letter").html());
    $(this).find("div.value").html(ui.draggable.find("div.value").html());

    $(this).droppable("disable");
  }
});
