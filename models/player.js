const mongoose = require('mongoose')

const playerSchema = mongoose.Schema({
	name: String,
	handicap: Number,
	updatedAt: Date
})

module.exports = mongoose.model('Player', playerSchema)