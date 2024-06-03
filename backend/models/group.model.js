const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: [{ name: String, email: String }],
    createdBy: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
