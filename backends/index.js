import express from 'express';
import cors from 'cors';
import db from './db.js'; // Adjust import if necessary

import authRouter from './routes/auth.js';
import sensorRouter from './routes/sensor.js';

import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes

app.use('/api/auth', authRouter);
app.use('/api/sensor', sensorRouter);

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB');

  // Start server after DB connection
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
