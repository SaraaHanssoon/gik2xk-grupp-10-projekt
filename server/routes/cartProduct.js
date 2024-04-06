const express = require('express');
const router = express.Router();
const { CartProduct } = require('../models/models/cartProduct');

// Lägg till en produkt i en varukorg
router.post('/', async (req, res) => {
  try {
    const cartProduct = await CartProduct.create(req.body);
    res.status(201).json(cartProduct);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Uppdatera antalet av en produkt i en varukorg
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await CartProduct.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedCartProduct = await CartProduct.findOne({ where: { id: req.params.id } });
      res.json(updatedCartProduct);
    } else {
      throw new Error('CartProduct inte hittad');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Ta bort en produkt från en varukorg
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await CartProduct.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send("CartProduct raderad");
    } else {
      throw new Error('CartProduct inte hittad');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
