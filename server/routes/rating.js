const express = require('express');
const router = express.Router();
const { Rating } = require('../models/models/rating');

// Skapa en ny rating för en produkt
router.post('/', async (req, res) => {
  try {
    const rating = await Rating.create(req.body);
    res.status(201).json(rating);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Hämta alla ratings för en specifik produkt
router.get('/:productId', async (req, res) => {
  try {
    const ratings = await Rating.findAll({
      where: { productId: req.params.productId }
    });
    res.json(ratings);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Uppdatera en rating
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Rating.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedRating = await Rating.findOne({ where: { id: req.params.id } });
      res.json(updatedRating);
    } else {
      throw new Error('Rating inte hittad');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Radera en rating
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Rating.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send("Rating raderad");
    } else {
      throw new Error('Rating inte hittad');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
