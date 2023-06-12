const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const emailService = require("./emailService");
const cors = require("cors");
const config = require("./config");

app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
  })
);
const port = process.env.PORT || 8000;

// send api
app.use("/send", async (req, res) => {
  try {
    res.json({ msg: "server" });
  } catch (error) {
    res.status(404).json({ msg: "Error" });
  }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

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

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
