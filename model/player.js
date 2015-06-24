var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
	defence : Number,
	offence : Number
}, {
	collection: 'players'
})

module.exports = mongoose.model('Player', playerSchema);