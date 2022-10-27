const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

app.get('/nuevo', (req, res) => {
  res.send('hola soy nuevo endpoint');
});

routerApi(app);

app.listen(port, () => {
  console.log('listen on port', port)
});
