const http = require('http');
const express = require('express');
const { response } = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).end();
});

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => console.log(`Server is listening ${PORT} port`));
