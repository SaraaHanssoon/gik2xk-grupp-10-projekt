const express = require('express');
const router = express.Router();
const { Cart } = require('../models');

// Hämta en användares varukorg
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({
      where: { userId: req.params.userId }
    });
    res.json(cart);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Skapa eller uppdatera en varukorg
router.post('/', async (req, res) => {
  try {
    const cart = await Cart.upsert(req.body); // upsert skapar eller uppdaterar baserat på primary key
    res.status(201).json(cart);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
