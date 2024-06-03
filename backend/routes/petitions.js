const express = require('express');
const router = express.Router();
const Petition = require('../models/petition.model');

router.post('/add', (req, res) => {
    const { title, description, createdBy } = req.body;
    const newPetition = new Petition({ title, description, createdBy });

    newPetition.save()
        .then(() => res.json('Petition created!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Petition.find()
        .then(petitions => res.json(petitions))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.put('/sign/:id', (req, res) => {
    Petition.findById(req.params.id)
        .then(petition => {
            const { name, email } = req.body;
            petition.signatures.push({ name, email });

            petition.save()
                .then(() => res.json('Petition signed!'))
                .catch(err => res.status(400).json(`Error: ${err}`));
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
