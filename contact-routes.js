const express = require("express");
const router = express.Router();

// POST /api/contact
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Here, you can handle the contact form data as needed, e.g.:
  // - Save to a database
  // - Send an email notification
  // - Log the data

  console.log("Received contact form submission:", { name, email, message });

  // Respond with success
  res.status(200).json({ message: "Your message has been received." });
});

module.exports = router;
