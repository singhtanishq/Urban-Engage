const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:pswd123@cluster.emju1.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const forumRouter = require('./routes/forums');
const issueRouter = require('./routes/issues');
const pollRouter = require('./routes/polls');
const eventRouter = require('./routes/events');
const dashboardRouter = require('./routes/dashboard');
const volunteerRouter = require('./routes/volunteers');
const petitionRouter = require('./routes/petitions');
const authRouter = require('./routes/auth');

app.use('/forums', forumRouter);
app.use('/issues', issueRouter);
app.use('/polls', pollRouter);
app.use('/events', eventRouter);
app.use('/dashboard', dashboardRouter);
app.use('/volunteers', volunteerRouter);
app.use('/petitions', petitionRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
