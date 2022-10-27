const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).end();
});

app.post('/', (req, res) => {});
app.patch('/', (req, res) => {});
app.delete('/', (req, res) => {});

app.get('/contest', (req, res) => {});
app.post('/contest', (req, res) => {});
app.patch('/contest/1', (req, res) => {});
app.delete('/contest/1', (req, res) => {});

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => console.log(`Server is listening ${PORT} port`));
