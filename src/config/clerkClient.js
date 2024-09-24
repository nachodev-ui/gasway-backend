const { createClerkClient } = require('@clerk/clerk-sdk-node')

const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_API_KEY,
})

module.exports = clerkClient