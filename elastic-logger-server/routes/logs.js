const express = require('express');

const router = express.Router();

// Get log
router.get('/', async (req, res) => {
    const { Client } = require('@elastic/elasticsearch')
    const client = new Client({
        node: 'http://es01:9200',
    //   auth: {
    //     username: 'elastic',
    //     password: 'changeme'
    //   }
    })
    const result = await client.search({
        index: 'logs',
    })
    console.log(result)
    res.status(200).send(result);
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