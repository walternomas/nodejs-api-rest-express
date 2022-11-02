const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
require('dotenv').config();
const { logErrors, errorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.API_PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

app.get('/nuevo', (req, res) => {
  res.send('hola soy nuevo endpoint');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('listen on port', port)
});
