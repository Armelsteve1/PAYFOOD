// models/contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    number: String,
    company: String,
    message: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
