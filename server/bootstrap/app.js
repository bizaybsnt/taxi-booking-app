
require('dotenv').config();

const express = require('express');

const app = express();


const api = require('../http/routes/api');

app.use('/api', api);

module.exports = app;