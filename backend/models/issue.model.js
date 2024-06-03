const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, default: 'reported' },
    reporter: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Issue = mongoose.model('Issue', issueSchema);

module.exports = Issue;
