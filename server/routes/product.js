const express = require('express');
const router = express.Router();
const { Product } = require('../models/models/product');

// Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Create a new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Update a product
router.put('/:product_id', async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { product_id: req.params.product_id }
    });
    if (updated) {
      const updatedProduct = await Product.findOne({ where: { product_id: req.params.product_id } });
      res.json(updatedProduct);
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a product
router.delete('/:product_id', async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { product_id: req.params.product_id }
    });
    if (deleted) {
      res.status(204).send("Product deleted");
    } else {
      throw new Error('Product not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
