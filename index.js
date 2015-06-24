
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/game', function (err) { 
	if(err) {
		process.exit(1); 
	}
});


// var Player = require('./model/player.js');

// 	Player.create({},function(err, player) {
// 		if(err) {
// 			return;
// 		}
// 		return player
// 	});

function createGridSector(maxValue) {
	return { 
		defenceResource:  parseInt(Math.random() * maxValue * 100),
		offenceResource:  parseInt(Math.random() * maxValue * 100),
		gravity:  parseInt(Math.random() * 10) // TODO: this is the max gravity - maybe have a const/setting
		// TODO: look at making gravity lower the further away from centre we go.
	}
}

function makeNewGrid() {
	var weightingPosition = 0;
	var tempIndexOf = 0;
	var weighting = [1, 9, 16, 25, 36, 49, 64, 81, 100, 121];
	var sectorArray = [];
	for(var i = 0; i < 100; i++) {
		tempIndexOf = weighting.indexOf(i);
		if(tempIndexOf != -1) {
			weightingPosition = tempIndexOf; 
		}
		sectorArray.push(createGridSector(weighting[weightingPosition]));
	}
	return sectorArray;
}

var temp = makeNewGrid();

var grid = require('./model/grid.js');

	grid.create({ sectors: temp },function(err, grid) {
		if(err) {
			return;
		}
		console.log( grid);
	});
