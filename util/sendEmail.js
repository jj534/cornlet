const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'cornletservice@gmail.com',
    pass: 'cornletyay',
  },
});

const sendEmail = (to, subject, html) => {
  const mailOptions = {
    from: 'cornletservice@gmail.com',
    to,
    subject,
    html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('ERROR sendEmail', error);
    } 
    else {
      console.log('SUCCESS sendEmail', info);
    }
  });
};

module.exports = sendEmail;
