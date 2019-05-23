const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./src/config/database')();
const eventsRoute = require('./src/event/event.route');
const healthRoute = require('./src/health/health.route');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/events', eventsRoute);
app.use('/health', healthRoute);

app.use((req, res) => res.status(404).json({ message: 'Resource not found' }));

module.exports = app;
