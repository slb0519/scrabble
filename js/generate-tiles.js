// email: sean_boullianne@student.uml.edu

var tiles = [
	{"letter":"A", "value":1,  "amount":9},
	{"letter":"B", "value":3,  "amount":2},
	{"letter":"C", "value":3,  "amount":2},
	{"letter":"D", "value":2,  "amount":4},
	{"letter":"E", "value":1,  "amount":12},
	{"letter":"F", "value":4,  "amount":2},
	{"letter":"G", "value":2,  "amount":3},
	{"letter":"H", "value":4,  "amount":2},
	{"letter":"I", "value":1,  "amount":9},
	{"letter":"J", "value":8,  "amount":1},
	{"letter":"K", "value":5,  "amount":1},
	{"letter":"L", "value":1,  "amount":4},
	{"letter":"M", "value":3,  "amount":2},
	{"letter":"N", "value":1,  "amount":6},
	{"letter":"O", "value":1,  "amount":8},
	{"letter":"P", "value":3,  "amount":2},
	{"letter":"Q", "value":10, "amount":1},
	{"letter":"R", "value":1,  "amount":6},
	{"letter":"S", "value":1,  "amount":4},
	{"letter":"T", "value":1,  "amount":6},
	{"letter":"U", "value":1,  "amount":4},
	{"letter":"V", "value":4,  "amount":2},
	{"letter":"W", "value":4,  "amount":2},
	{"letter":"X", "value":8,  "amount":1},
	{"letter":"Y", "value":4,  "amount":2},
	{"letter":"Z", "value":10, "amount":1},
	{"letter":"_", "value":0,  "amount":2}
];

// creates a deck of tiles based on tiles[]
var currentDeck = [];
for (i in tiles) {
  for (var j = 0; j < tiles[i].amount; j++) {
    currentDeck.push(tiles[i].letter);
  }
}



// creates a random hand of 7 tiles based on currentDeck[]
var currentHand = [];

function deal() {

	while (currentHand.length !== 7) {
		if (currentDeck.length !== 0) {
		  var rand = Math.floor(Math.random() * currentDeck.length);
		  var myTile = currentDeck[rand];
		  currentHand.push(myTile);
		  currentDeck.splice(rand, 1);
		}
		else {
			alert("Game Over! Deck is empty")
			break;
		}
	}
	printHand();
	makeDraggable();
}

function printHand() {
	// clear current hand
	$("#tiles").empty();

	// creates tile objects and places them in html list
	for (var i = 0; i < currentHand.length; i++) {
		// grab tiles ul
		var tilesList = $("#tiles");

		// create an li
		var newTile = document.createElement("li");

		// create and attach a draggable div to li
		var newDiv = document.createElement("div");
		newDiv.setAttribute("class", "draggable");
		newTile.appendChild(newDiv);

		// create and attach an img with correct src to div
		var newImage = document.createElement("img");
		var imgPath = "images/tiles/Scrabble_Tile_" + currentHand[i] +".jpg";
			// correct img src if blank tile
			if (currentHand[i] == "_") {
				imgPath = "images/tiles/Scrabble_Tile_Blank.jpg"
			}
		newImage.setAttribute("src", imgPath);
		newDiv.appendChild(newImage);

		// create and attach a letter div to draggable div
		var newDivLetter = document.createElement("div");
	  newDivLetter.innerHTML = currentHand[i];
	  newDivLetter.setAttribute("class", "letter");
	  newDiv.appendChild(newDivLetter);

		// create and attach a value div to draggable div
		var newDivValue = document.createElement("div");
		var index = currentHand[i].charCodeAt(0) - 65;
		if (currentHand[i] == "_") {
			index = 26;
		}
	  newDivValue.innerHTML = tiles[index].value;
	  newDivValue.setAttribute("class", "value");
	  newDiv.appendChild(newDivValue);

		// append newly created li to tiles ul
		tilesList.append(newTile);
	}
}
