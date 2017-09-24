/* eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

/* GET /status endpoint */
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world',
  });
});

/* POST /register endpoint */
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} your user was registered.`,
  });
});

app.listen(process.env.PORT || 8081);
