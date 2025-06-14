require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.json());

const usersRouter = require('./Routes/users');
app.use('/users', usersRouter);

app.listen(3000, () => console.log('Server Started on port 3000'));
