const User = require("../models/userModel");
const bcrypt = require("bcrypt");



// @desc    Register a new user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
            return res.status(400).json({
                success: false,
                error: 'User already exists'
            });
        }

        const user = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        });
        console.log(user);
        res.status(201).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
}



module.exports = { registerUser }