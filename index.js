const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

app.get('/nuevo', (req, res) => {
  res.send('hola soy nuevo endpoint');
});

app.get('/products', (req, res) => {
  res.json({
    name: "Walter",
    price: 1000
  });
});

app.listen(port, ()=> {
  console.log('listen on port', port)
});
