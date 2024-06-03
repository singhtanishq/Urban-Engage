const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
    projectName: { type: String, required: true },
    budget: { type: Number, required: true },
    spent: { type: Number, required: true },
    timeline: { type: String, required: true },
    performanceMetrics: { type: String, required: true },
}, {
    timestamps: true,
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);

module.exports = Dashboard;
