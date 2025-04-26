const jwt = require("jsonwebtoken");

const authenticationToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) 
    {
      return res.status(401).json({ message: "No token, authorization denied" });
    }
 
    const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_secret_key");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authenticationToken;
