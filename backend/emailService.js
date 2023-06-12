const nodemailer = require("nodemailer");
const config = require("./config");

const Email = (options) => {
  const transporter = nodemailer.createTransport({
    service: config.EMAIL_SERVICE,
    auth: {
      user: config.EMAIL_USERNAME,
      pass: config.EMAIL_PASSWORD,
    },
  });

  transporter.sendMail(options, (error, info) => {
    if (error) {
      console.log(error);
      return;
    }
  });
};

// send email
const emailSender = ({ name, email, message }) => {
  const mailOptions = {
    from: `KatlegoJDev <${config.EMAIL_USERNAME}>`,
    to: config.RECIPIENT_EMAIL,
    subject: "New Message from KatlegoJDev Website!",
    html: `
    <div style="width: 100%; background-color: #f3f9ff; padding: 5rem 0">
    <div style="max-width: 700px; background-color: white; margin: 0 auto">
      <div style="width: 100%; background-color: #00efbc; padding: 20px 0">
      <a href="${config.CLIENT_URL}" ><img
          src="https://www.google.com/maps/uv?pb=!1s0x1ec22fcbce24c2d3%3A0x119b0eb2cdc3228c!5sKatlegoJDev!15sCgIgARICEAE#"
          style="width: 100%; height: 70px; object-fit: contain"
        /></a> 
      
      </div>
      <div style="width: 100%; gap: 10px; padding: 30px 0; display: grid">
        <p style="font-weight: 800; font-size: 1.2rem; padding: 0 30px">
          From KatlegoJDev
        </p>
        <div style="font-size: .8rem; margin: 0 30px">
          <p>FullName: <b>${name}</b></p>
          <p>Email: <b>${email}</b></p>
          <p>Message: <i>${message}</i></p>
        </div>
      </div>
    </div>
  </div>
    `,
  };
  Email(mailOptions);
};
// from: config.EMAIL_USERNAME,
// to: config.RECIPIENT_EMAIL,
// subject: "New Message from Portfolio Website",
// text: `Name: ${name}\n\nEmail: ${email}\n\nMessage: ${message}`,

module.exports = { emailSender };
