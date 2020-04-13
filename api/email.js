var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.hostinger.in",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'info@demo.saiarlen.com', // generated hostinger user
    pass: 'rYnL1E@e' // generated hostinger password
  }
});

exports.componseEmail = (payload) => {
  var emailConf = {
    from: 'info@demo.saiarlen.com', // sender address
    to: payload.toAddress, // list of receivers
    subject: payload.subjet, // Subject line
    text: payload.plainText, // plain text body
    html: payload.html // html body
  };

  transporter.sendMail(emailConf, (err, info) => {
    if (err) {
      console.log(err);
    }
    console.log(info);
  });

};
