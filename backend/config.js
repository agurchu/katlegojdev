require("dotenv").config();

const config = {
  EMAIL_SERVICE: process.env.EMAIL_SERVICE,
  EMAIL_USERNAME: process.env.EMAIL_USERNAME,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  RECIPIENT_EMAIL: process.env.RECIPIENT_EMAIL,
  CLIENT_URL: process.env.CLIENT_URL,
  LOGO: process.env.LOGO,
};

module.exports = config;
