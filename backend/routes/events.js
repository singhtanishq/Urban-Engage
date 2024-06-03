const express = require('express');
const router = express.Router();
const Event = require('../models/event.model');

router.post('/add', (req, res) => {
    const { title, description, date, organizer, location } = req.body;
    const newEvent = new Event({ title, description, date, organizer, location });

    newEvent.save()
        .then(() => res.json('Event added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
