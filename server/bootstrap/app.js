require('dotenv').config();

const express = require('express');

const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

const user = require('../http/routes/userApi');
const driver = require('../http/routes/driverApi');
const api = require('../http/routes/api');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.use('/api', api);
app.use('/api/user', user);
app.use('/api/driver', driver);

module.exports = app;
