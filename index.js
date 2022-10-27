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
  res.json([{
    name: "Jabon",
    price: 1000
  },{
    name: "detergente",
    price: 2000
  }]);
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    name: "Product 2",
    price: 1000
  })
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const {categoryId,productId} = req.params;
  res.json({
    categoryId,
    productId
  })
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    res.json({
      limit,
      offset
    });
  }else {
    res.send('no hay parametros');
  }
});

app.listen(port, ()=> {
  console.log('listen on port', port)
});
