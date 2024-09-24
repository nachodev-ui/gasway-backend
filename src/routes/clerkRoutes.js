const express = require('express')
const router = express.Router()
const { getSessionListClerk } = require('../controllers/userController')

router.get('/sessions', getSessionListClerk)

module.exports = router