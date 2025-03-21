const express = require('express');
const { registerUser, loginUser } = require('../controllers/userControllers');

const router = express.Router();
router.post('/register',async (req,res)=>{
    try {
        const {username , email , password } = req.body;
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        });
        res.status(201).json({message:"User created successfully",user: newUser});
    } catch (error) {
        res.status(500).json({message:"An error occurred"});
    }
});

router.post('/login',loginUser);

module.exports = router;