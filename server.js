const app = require('./app');
const cors = require('cors')
const config = require('./src/config/config');

app.use(cors())

app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
