const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const logs = require('./routes/logs');
app.use('/api/v1/logs', logs);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));