const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://admin:<My Password>@cluster.dlb0yye.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Import routes
const forumRouter = require('./routes/forums');
const issueRouter = require('./routes/issues');
const pollRouter = require('./routes/polls');
const eventRouter = require('./routes/events');
const dashboardRouter = require('./routes/dashboard');
const volunteerRouter = require('./routes/volunteers');
const petitionRouter = require('./routes/petitions');
const groupRouter = require('./routes/groups');

app.use('/forums', forumRouter);
app.use('/issues', issueRouter);
app.use('/polls', pollRouter);
app.use('/events', eventRouter);
app.use('/dashboard', dashboardRouter);
app.use('/volunteers', volunteerRouter);
app.use('/petitions', petitionRouter);
app.use('/groups', groupRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
