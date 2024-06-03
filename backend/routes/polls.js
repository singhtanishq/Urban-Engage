const express = require('express');
const router = express.Router();
const Poll = require('../models/poll.model');

router.post('/add', (req, res) => {
    const { question, options, createdBy } = req.body;
    const newPoll = new Poll({ question, options, createdBy });

    newPoll.save()
        .then(() => res.json('Poll created!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Poll.find()
        .then(polls => res.json(polls))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.put('/vote/:id', (req, res) => {
    Poll.findById(req.params.id)
        .then(poll => {
            const { optionIndex } = req.body;
            poll.options[optionIndex].votes += 1;

            poll.save()
            .then(() => res.json('Vote added!'))
            .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
