const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;
