const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
require('dotenv').config();
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = [
  'http://localhost:8080',
  'http://localhost:5000',
  'http://localhost:3000',
  'https://wbit.ar'
];
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin) {
      callback(null, true);
    }else {
      callback(new Error('Not allowed'));
    }
  }
};
app.use(cors(options));

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

app.get('/nuevo', (req, res) => {
  res.send('hola soy nuevo endpoint');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('listen on port', port)
});
