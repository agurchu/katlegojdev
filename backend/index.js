const express = require("express");
const app = express();
const { emailSender } = require("./emailService");
const cors = require("cors");
const config = require("./config");

app.use(express.json());
app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true,
  })
);
const port = process.env.PORT || 8000;

// send api
app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    emailSender({ name, email, message });
    res.json({ msg: "Message sent successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Failed to send message" });
  }
});

// Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
