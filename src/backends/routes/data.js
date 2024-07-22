const express = require('express');
const router = express.Router();

// Dummy data
let data = [
    { id: 1, temperature: '22', humidity: '50%', datetime: '2024-07-13T12:00:00' },
];

// Get all data
router.get('/', (req, res) => {
    res.json(data);
});

// Add new data
router.post('/', (req, res) => {
    const newData = req.body;
    data.push(newData);
    res.status(201).json(newData);
});

module.exports = router;