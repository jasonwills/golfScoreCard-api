const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv/config')
const port = process.env.PORT || 3030

app.use(express.json())
app.use(cors())

//Routes
const playersRouter = require('./routes/players')
const coursesRouter = require('./routes/courses')

const allowCrossDomain = (req, res, next) => {
	res.header(`Access-Control-Allow-Origin`, `*`)
	res.header(`Access-Control-Allow-Methods`, `GET,PATCH,POST,DELETE`)
	res.header(`Access-Control-Allow-Headers`, `Content-Type`)
	next()
}

app.use(allowCrossDomain)
app.use('/api/players', playersRouter)
app.use('/api/courses', coursesRouter)

const mongoConnection = async () => {
	try {
		const connection = await mongoose.connect('mongodb+srv://dbReader:X4j3ZWk3MQHUh07B@jwcluster.fji4phf.mongodb.net/golfapi')
		console.log('Connected to DB - ', connection.connection.host, connection.connection.name)
	} catch (err) {
		console.error(err)
		process.exit(1)
	}
}

mongoConnection()

app.listen(port, () => {
	console.log(`Server Started on port ${port}`)
})