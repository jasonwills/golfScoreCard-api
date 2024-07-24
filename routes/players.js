const express = require('express')
const router = express.Router()
const Player = require('../models/player')

router.get('/', async (req, res) => {
  try {
    const allPlayers = await Player.find()
    res.json(allPlayers)
  } catch (err) {
    res.json({ message: err })
  }
})

router.get('/:id', async (req, res) => {
  try {
		const player = await Player.findById(req.params.id)
		res.json(player)
	} catch (err) {
		res.json({ message: err })
	}
})

module.exports = router