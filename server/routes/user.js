const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Antag att alla dina modeller exporteras från en central fil

// Hämta alla användare
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Skapa en ny användare
router.post('/', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// Uppdatera en användare
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await User.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedUser = await User.findOne({ where: { id: req.params.id } });
      res.status(200).json(updatedUser);
    } else {
      throw new Error('Användare inte hittad');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Radera en användare
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send("Användare raderad");
    } else {
      throw new Error('Användare inte hittad');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
