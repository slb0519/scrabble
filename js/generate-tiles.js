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
var currentTiles = [];
for (i in tiles) {
  for (var j = 0; j < tiles[i].amount; j++) {
    currentTiles.push(tiles[i].letter);
  }
}

// creates a random hand of 7 tiles based on currentTiles[]
var myHand = [];
for (var i = 0; i < 7; i++) {
  var rand = Math.floor(Math.random() * currentTiles.length);
  var myTile = currentTiles[rand];
  myHand.push(myTile);
  currentTiles.splice(rand, 1);
}
