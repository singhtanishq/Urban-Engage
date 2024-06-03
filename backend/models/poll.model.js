const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pollSchema = new Schema({
    question: { type: String, required: true },
    options: [{ option: String, votes: { type: Number, default: 0 } }],
    createdBy: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Poll = mongoose.model('Poll', pollSchema);

module.exports = Poll;
