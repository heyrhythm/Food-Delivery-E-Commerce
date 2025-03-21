const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');

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

// User Login
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      // Compare passwords
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      // Generate JWT Token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });
  
  module.exports = router;
  

