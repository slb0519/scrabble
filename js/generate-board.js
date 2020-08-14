var boardVals = [1, 2, 1, 1, 1, 2, 1];
var currentBoardState = ['','','','','','',''];

// creates space objects and places them in html list
for (var i = 0; i < 7; i++) {
	// grab board ul
	var board = $("#board");

	// create an li
	var newSpace = document.createElement("li");

	// create and attach a droppable div to li
	var newDiv = document.createElement("div");
	newDiv.setAttribute("class", "droppable");
	newSpace.appendChild(newDiv);

	// create and attach an img with correct src to div
	var newImage = document.createElement("img");
	var imgPath = "images/spaces/Scrabble_Space_Blank.jpg";
		if (i == 1 || i == 5) {
			imgPath = "images/spaces/Scrabble_Space_Double_Word.jpg"
		}
	newImage.setAttribute("src", imgPath);
	newDiv.appendChild(newImage);

  // create and attach a value div to droppable div
  var newDivValue = document.createElement("div");
  newDivValue.innerHTML = 0;
  newDivValue.setAttribute("class", "value");
  newDiv.appendChild(newDivValue);

  // create and attach a tile div to droppable div
  var newDivTile = document.createElement("div");
  newDivTile.innerHTML = currentBoardState[i];
  newDivTile.setAttribute("class", "tile");
  newDiv.appendChild(newDivTile);

	// append newly created li to tiles ul
	board.append(newSpace);
}
