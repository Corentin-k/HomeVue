import express from 'express';
import db from '../db.js';

const router = express.Router();

// Route to save sensor data
router.post('/save-data', (req, res) => {
    const { temperature, humidity } = req.body;

    if (temperature === undefined || humidity === undefined) {
        return res.status(400).json({ message: 'Temperature and humidity are required' });
    }

    db.query(
        'INSERT INTO sensor_data (temperature, humidity) VALUES (?, ?)',
        [temperature, humidity],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Server Error', error: err });
            }
            res.status(201).json({ message: 'Data saved successfully' });
        }
    );
});
// Route to get sensor data
router.get('/data', (req, res) => {
    db.query('SELECT * FROM sensor_data ORDER BY timestamp DESC', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Server Error', error: err });
        }
        res.status(200).json(results);
    });
});

export default router;
