const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
  name: String,
  club: String,
  whitepar: Number,
  yellowpar: Number,
  redpar: Number,
  whitelength: Number,
  yellowlength: Number,
  redlength: Number,
  holes: Array
})

module.exports = mongoose.model('Course', courseSchema)