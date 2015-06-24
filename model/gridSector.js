//gridSector.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gridSectorSchema = mongoose.Schema({
	defenceResource: Number,
	offenceResource: Number,
	gravity: Number,
	type: String, // artefacts/wormholes/etc. typeSchema
	playerId: { type: Schema.Types.ObjectId, ref: 'Player' }
}, {
	collection: 'gridSectors',
	strict: false
});

module.exports = mongoose.model('GridSector', gridSectorSchema);