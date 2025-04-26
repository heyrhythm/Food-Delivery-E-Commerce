const express = require("express");
const Restaurant = require("../models/Restaurant");

const router = express.Router();

// Search API
router.get("/", async (req, res) => {
  const query = req.query.query;

  if (!query) {
    return res.status(400).json({ message: "Query parameter is required" });
  }

  try {
    const results = await Restaurant.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { cuisine: { $regex: query, $options: "i" } },
        { location: { $regex: query, $options: "i" } },
      ],
    }).limit(10); // Limit the results to 10 items for performance

    res.json(results || []); // Return an empty array if no results found
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
