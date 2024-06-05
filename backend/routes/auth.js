const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const router = express.Router();
const secretKey = 'key123'; 

// User sign up
router.post('/signup', async (req, res) => {
    const { name, username, password } = req.body;
    
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, username, password: hashedPassword });

        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});

// User login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ id: user._id, username: user.username }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

// Admin login
router.post('/admin/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const adminUser = await User.findOne({ username, isAdmin: true });
        if (!adminUser) {
            return res.status(400).json({ message: 'Invalid admin credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, adminUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid admin credentials' });
        }

        const token = jwt.sign({ id: adminUser._id, username: adminUser.username, isAdmin: true }, secretKey, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});

module.exports = router;
