const express = require('express');
const aiRoute = require('./routes/ai.route.js');
const app = express()

const cors = require('cors');
app.use(cors());

app.use(express.json())

app.use('/ai', aiRoute);

module.exports = app;