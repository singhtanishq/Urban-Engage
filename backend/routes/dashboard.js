const express = require('express');
const router = express.Router();
const Dashboard = require('../models/dashboard.model');

router.post('/add', (req, res) => {
    const { projectName, budget, spent, timeline, performanceMetrics } = req.body;
    const newDashboard = new Dashboard({ projectName, budget, spent, timeline, performanceMetrics });

    newDashboard.save()
        .then(() => res.json('Dashboard entry added!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.get('/', (req, res) => {
    Dashboard.find()
        .then(dashboards => res.json(dashboards))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
