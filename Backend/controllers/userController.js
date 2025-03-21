const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUer = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({email});
        if(user) {
            return res.status(400).json({msg: "User already exists"});
        }
        user = new User({
            username,
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        user.hashedpassword = await bcrypt.hash(password, salt);
        user = new User({
            username,
            email,
            password,
    });
    await user.save();
    res.status(201).json({msg: "User created successfully"});
} catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
}};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({
            email
        });
        if(!user) {
            return res.status(400).json({msg: "Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({msg: "Invalid credentials"});
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"});
        res.json({token, user: {id: user._id, username: user.username, email: user.email}});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
};
module.exports = { registerUser, loginUser };
