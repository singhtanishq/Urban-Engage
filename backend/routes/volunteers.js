const express = require('express');
const router = express.Router();
const Volunteer = require('../models/volunteer.model');

router.post('/add', (req, res) => {
    const { eventName, task, volunteerName, contactInfo } = req.body;
    const newVolunteer = new Volunteer({ eventName, task, volunteerName, contactInfo });

    newVolunteer.save()
        .then(() => res.json('Volunteer added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Volunteer.find()
        .then(volunteers => res.json(volunteers))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
