const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const emailService = require("./emailService");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route to handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  emailService
    .sendEmail(name, email, message)
    .then(() => {
      console.log("Message sent successfully");
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send message" });
    });
});

module.exports = app;
