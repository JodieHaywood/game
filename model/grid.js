//grid.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var GridSectorSchema = require('./gridSector');

var gridSectorSchema = mongoose.Schema({
	defenceResource: Number,
	offenceResource: Number,
	gravity: Number,
	type: String, // artefacts/wormholes/etc. typeSchema
	playerId: { type: Schema.Types.ObjectId, ref: 'Player' }
}, {
	collection: 'gridSectors'
});

var gridSchema = mongoose.Schema({
	sectors: [ gridSectorSchema ]
}, {
	collection: 'grids'
});

module.exports = mongoose.model('Grid', gridSchema);