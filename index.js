const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});

app.listen(port, ()=> {
  console.log('listen on port', port)
});
