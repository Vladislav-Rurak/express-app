const express = require('express');
const { contactsController } = require('./controllers');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
// console.log('req', req)
//   res.status(200).end();
// });

// ----------------------------------

app.get('/contacts', contactsController.getContacts);
app.post('/contacts', contactsController.createContact);

// параметры маршрута
app.get('/contacts/:id', contactsController.getContactsById);

module.exports = app;
