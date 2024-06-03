const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const volunteerSchema = new Schema({
    eventName: { type: String, required: true },
    task: { type: String, required: true },
    volunteerName: { type: String, required: true },
    contactInfo: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
