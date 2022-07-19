const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

// async..await is not allowed in global scope, must use a wrapper
exports.sendEmail = async(message) => {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: process.env.MAILER_PORT,
    starttls: {
      enable: true
    },
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAILER_USERNAME,
      pass: process.env.MAILER_PASSWORD,
    },
    from: 'no-reply@gmail.com'
  });

  try {
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'No Reply <no-reply@gmail.com>', // sender address
        to: message.email, // list of receivers
        subject: message.title, // Subject line
        text: message.body, // plain text body
        html: `<b> ${message.body}</b>`, // html body
    });

    console.info("Messages sent: %s", info.messageId);

    return info;
  } catch(err) {
    console.error(err);
  }
}