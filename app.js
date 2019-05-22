const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const eventsRouter = require('./src/routes/event');
require('./src/config/database')();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/events', eventsRouter);

app.use((req, res) => res.status(404).json({ message: 'Resource not found' }));

module.exports = app;
