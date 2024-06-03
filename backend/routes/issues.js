const express = require('express');
const router = express.Router();
const Issue = require('../models/issue.model');

router.post('/add', (req, res) => {
    const { title, description, reporter } = req.body;
    const newIssue = new Issue({ title, description, reporter });

    newIssue.save()
        .then(() => res.json('Issue reported!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Issue.find()
        .then(issues => res.json(issues))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.put('/update/:id', (req, res) => {
    Issue.findById(req.params.id)
        .then(issue => {
            issue.title = req.body.title;
            issue.description = req.body.description;
            issue.status = req.body.status;

            issue.save()
                .then(() => res.json('Issue updated!'))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.delete('/:id', (req, res) => {
    Issue.findByIdAndDelete(req.params.id)
        .then(() => res.json('Issue deleted.'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
