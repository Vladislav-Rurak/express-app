const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).end();
});

app.post('/', (req, res) => {});
app.patch('/', (req, res) => {});
app.delete('/', (req, res) => {});

app.get('/contests', (req, res) => {
  res.status(200).send({ id: 1 });
});
app.post('/contests', (req, res) => {
  res.status(200).send({ id: 2 });
});
app.patch('/contests/1', (req, res) => {});
app.delete('/contests/1', (req, res) => {});

module.exports = app;
