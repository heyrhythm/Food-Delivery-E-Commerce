const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {OAuth2Client} = require("google-auth-library");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const cors = require("cors"); // ✅ Added CORS middleware
const User = require("../models/User");
const authenticationToken = require("../middleware/authMiddleware");

const router = express.Router();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ✅ Use CORS middleware instead of manual headers
router.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Get all users (excluding passwords)
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
});

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
    console.log("Received request:", req.body);
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Generate a JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "your_secret_key", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
});

// Google Login Route

router.post("/google-login", async (req, res) => {
  const { tokenId } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: tokenId ,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { email, name, sub: googleId } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ name, email, googleId });
      await user.save();
    }

    // Generate a JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "your_secret_key", {
      expiresIn: "1h",
    });

    // Set cookie
res.cookie('token', token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production', // Only send cookie over HTTPS in production
  sameSite: 'None', // Allow third-party cookies
});

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in with Google", error: error.message });
  }
});

// Password Reset Request Route
router.post('/reset-password-request', async (req, res) => {
  const { email } = req.body;
  try {
      const user = await User.findOne({ email });
      if (!user) return res.status(404).json({ message: 'User not found' });

      // Generate a reset token
      const resetToken = crypto.randomBytes(20).toString('hex');
      const resetTokenExpiration = Date.now() + 3600000;
      user.resetToken = resetToken;
      user.resetTokenExpiration = resetTokenExpiration;
      await user.save();

      // Send reset token via email (using nodemailer)
      const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
          },
      });

      const mailOptions = {
          from: process.env.EMAIL_USER,
          to: email,
          subject: 'Password Reset Request',
          text: `To reset your password, use the following token: ${resetToken}`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) return res.status(500).json({ message: 'Error sending email', error });
          res.status(200).json({ message: 'Password reset token sent to email' });
      });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});
// Get User Profile (Protected Route)
router.get("/me", authenticationToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
