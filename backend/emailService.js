const nodemailer = require("nodemailer");
const config = require("./config");

const sendEmail = (name, email, message) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: config.EMAIL_SERVICE,
      auth: {
        user: config.EMAIL_USERNAME,
        pass: config.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: config.RECIPIENT_EMAIL,
      subject: "New Message from Portfolio Website",
      text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
};

module.exports = { sendEmail };
