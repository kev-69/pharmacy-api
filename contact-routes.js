const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// POST /api/contact
router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Create a transporter object using Gmail SMTP
  let transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail service
    auth: {
      user: process.env.GMAIL_EMAIL, // Your Gmail email address
      pass: process.env.GMAIL_PASSWORD, // Your Gmail password or app-specific password
    },
  });

  // Email options
  let mailOptions = {
    from: process.env.GMAIL_EMAIL, // Your Gmail email as the sender
    replyTo: email, // The sender's email address from the form
    to: process.env.RECEIVER_EMAIL, // Receiver's email address (your email)
    subject: `New Contact Form Submission from ${name}`,
    text: `You have received a new message from your contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    // Respond with success
    res.status(200).json({ message: "Your message has been sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send your message. Please try again later." });
  }
});

module.exports = router;