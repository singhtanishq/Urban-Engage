const express = require('express');
const router = express.Router();
const Group = require('../models/group.model');

router.post('/add', (req, res) => {
    const { name, description, createdBy } = req.body;
    const newGroup = new Group({ name, description, createdBy });

    newGroup.save()
        .then(() => res.json('Group created!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.put('/join/:id', (req, res) => {
    Group.findById(req.params.id)
        .then(group => {
            const { name, email } = req.body;
            group.members.push({ name, email });

            group.save()
                .then(() => res.json('Joined group!'))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
