require('dotenv').config();

if (!process.env.PGHOST || !process.env.PGDATABASE || !process.env.PGUSER || !process.env.PGPASSWORD) {
  throw new Error('Missing required database environment variables');
}

module.exports = {
  port: process.env.PORT || 8080,
  dbHost: process.env.PGHOST,
  dbName: process.env.PGDATABASE,
  dbUser: process.env.PGUSER,
  dbPassword: process.env.PGPASSWORD,
  endpointId: process.env.ENDPOINT_ID || ''
}