const Contacts = require('./../models');

module.exports.getContacts = (req, res) => {
  const contacts = contactsDbInstace.getContacts();
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const { body } = req;
  const newContact = contactsDbInstace.createContact(body);
  res.status(201).send(newContact);
};