const express = require('express');

const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.status(200).json(products);
});

router.get('/filter', (req, res) => {
  res.status(200).send('yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json({
    message: "Product created successfully",
    data: newProduct
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.edit(id, body);
  if (product.error) {
    res.status(404).send('Product not found');
  } else {
    res.status(200).json({
      message: "Product edited successfully",
      data: product
    });
  }
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  if (product.error) {
    res.status(404).send('Product not found');
  } else {
    res.status(200).json({
      message: "Product updated successfully",
      data: product
    });
  }
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.status(200).json(rta);
});

module.exports = router;
