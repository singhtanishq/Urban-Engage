const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petitionSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    signatures: [{ name: String, email: String }],
    createdBy: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Petition = mongoose.model('Petition', petitionSchema);

module.exports = Petition;
