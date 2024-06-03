const express = require('express');
const router = express.Router();
const Forum = require('../models/forum.model');

router.post('/add', (req, res) => {
    const { title, content, author } = req.body;
    const newForum = new Forum({ title, content, author });

    newForum.save()
        .then(() => res.json('Forum post added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Forum.find()
        .then(forums => res.json(forums))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
