const express = require('express');

const router = express.Router();

// Get log
router.get('/', async (req, res) => {
  
  res.status(200).send('index');
});

// Get log by id
router.get('/:id', async (req, res) => {
    res.status(200).send('show');
});

// Add log
router.post('/', async (req, res) => {
    res.status(200).send('update');
});

// Update log
router.put('/:id', async (req, res) => {
    res.status(200).send('update');
});

// Delete log
router.delete('/:id', (req, res) => {
    res.status(200).send('destroy');
});

module.exports = router;