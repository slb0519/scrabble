$(".droppable").droppable({
  drop: function(event, ui) {
    var info = ui.draggable;
    console.log(info);
  }
});
