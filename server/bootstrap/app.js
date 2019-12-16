require('dotenv').config();

const express = require('express');

const app = express();

const user = require('../http/routes/userApi');
const driver = require('../http/routes/driverApi');

app.use('/api/user', user);
app.use('/api/driver', driver);

module.exports = app;
