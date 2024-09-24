const express = require('express')
const { getAllUsers, getUserById, getUserByClerkId } = require('../controllers/userController')
const { requireAuth } = require('@clerk/clerk-sdk-node')

const router = express.Router()

router.get('/users', requireAuth, getAllUsers)
router.get('/users/:id', getUserById)
router.get('/users/clerk/:clerkId', getUserByClerkId)

module.exports = router