const express = require('express');
const router = express.Router();

const Contact = require('../contact');

router.post('/submit', (req, res) => {

    const { name, email, number, company, message } = req.body;
    const contact = new Contact({
        name,
        email,
        number,
        company,
        message
    });

    contact.save()
        .then(() => {
            console.log('Data saved to MongoDB');
            res.json({ success: true, message: 'Data saved to MongoDB' });
        })
        .catch((error) => {
            console.error('Error saving data:', error);
            res.status(500).json({ success: false, error: 'Failed to save data' });
        });
});

module.exports = router;
