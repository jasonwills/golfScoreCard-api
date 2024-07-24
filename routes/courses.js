const express = require('express')
const router = express.Router()
const Course = require('../models/course')


router.get('/', async (req, res) => {
	try {
		const allCourses = await Course.find()
		res.json(allCourses)
	} catch (err) {
		res.json({ message: err })
	}
})

module.exports = router
