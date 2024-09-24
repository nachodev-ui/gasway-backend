const express = require('express')
const userRoutes = require('./src/routes/userRoutes')
const clerkRoutes = require('./src/routes/clerkRoutes')
const auth0Middleware = require('./src/middlewares/auth0')

const app = express()
app.use(express.json())

// Registro de middleware
app.use(auth0Middleware);

// Registro de rutas
app.use('/api', userRoutes)
app.use('/api/clerk', clerkRoutes)

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

module.exports = app;
