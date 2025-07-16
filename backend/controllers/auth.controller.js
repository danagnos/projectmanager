const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const user = await User.create({ email, password });
        res.status(201).json({ token: generateToken(user) });

    } catch (err) {
        res.status(500).json({ message: 'Error registering user' });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        console.log("➡️ Login attempt:", email);

        const user = await User.findOne({ email });
        if (!user) {
            console.log("User not found");
            return res.status(401).json({ message: 'User not found' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            console.log("Invalid password");
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = generateToken(user);
        console.log("Login success. Token generated.");
        res.json({ token });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: 'Server error during login' });
    }
};
