const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// Hämta alla produkter
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Skapa en ny produkt
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Uppdatera en produkt
router.put('/:product_id', async (req, res) => {
  try {
    const [updated] = await Product.update(req.body, {
      where: { product_id: req.params.product_id }
    });
    if (updated) {
      const updatedProduct = await Product.findOne({ where: { product_id: req.params.product_id } });
      res.json(updatedProduct);
    } else {
      throw new Error('Produkt inte hittad');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Radera en produkt
router.delete('/:product_id', async (req, res) => {
  try {
    const deleted = await Product.destroy({
      where: { product_id: req.params.product_id }
    });
    if (deleted) {
      res.status(204).send("Produkt raderad");
    } else {
      throw new Error('Produkt inte hittad');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
