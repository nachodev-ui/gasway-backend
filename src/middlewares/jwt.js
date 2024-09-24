const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'GSW-ATH-API',
  issuerBaseURL: `https://dev-so3cvmh1cflqnqhu.us.auth0.com/`,
});

const checkScopes = requiredScopes('read:messages');

module.exports = { checkJwt, checkScopes }