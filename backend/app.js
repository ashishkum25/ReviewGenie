const express = require('express');
const aiRoute = require('./routes/ai.route.js');
const app = express()

app.use(express.json())

app.use('/ai', aiRoute);

module.exports = app;