// email: sean_boullianne@student.uml.edu

function makeDraggable() {
  // activates dragging and snapping to droppable elements
  $(".draggable").draggable({
    snap: ".droppable",
    snapMode: "inner",
    snapTolerance: 50,
    revert: "invalid"
  });
}
