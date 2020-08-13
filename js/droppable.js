$(".droppable").droppable({
  drop: function(event, ui) {
    var info = ui.draggable.html();
    console.log(info);
  }
});
