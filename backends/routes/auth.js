import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../db.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT; // Remplacez par votre secret réel

// Enregistrement
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword],
        (err, results) => {
            if (err) {
                return res.status(500).json({ message: 'Server Error', error: err });
            }
            const token = jwt.sign({ id: results.insertId, username, email }, JWT_SECRET, { expiresIn: '1h' });
            res.status(201).json({ token, username, email });
        }
    );
});

// Connexion
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    console.log(email + ' ' + password);
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Server Error', error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Générer le token JWT
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn:'1h' });

        // Renvoi des données de l'utilisateur incluant la couleur
        res.json({
            token,
            email: user.email,
            color: user.color // Assurez-vous que le champ color existe dans votre table users
        });
    });
});


router.put('/update-color', (req, res) => {

    const { email, color } = req.body;
    console.log(email + ' ' + color);
    if (!email || !color) {
        return res.status(400).json({ message: 'email and color are required' });
    }

    db.query(
        'UPDATE users SET color = ? WHERE email = ?',
        [color, email],
        (err) => {
            if (err) {
                return res.status(500).json({ message: 'Server Error', error: err });
            }
            res.status(200).json({ message: 'Color updated successfully' });
        }
    );
});

export default router;
