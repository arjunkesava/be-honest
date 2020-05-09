var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.hostinger.in",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.emailUserName || "", // generated hostinger user
    pass: process.env.emailPassword || "", // generated hostinger password
  },
});

function emailTemplate(privateLink, publicLink, yourEmailId) {
  return `<div>
<div>
<h2>Well done! What's next!</h2>
<p>Aww yeah, you had successfully created your honest form.</p>
<p>Share the below link with your friends:</p>
<div><strong><a href="${publicLink}" target="_blank" rel="noopener noreferrer">${publicLink}</a></strong></div>
<p>If anyone of your friends gives feedback, we will send you an e-mail to</p>
<div><strong>${yourEmailId}</strong></div>
<p>And you can view all your friends response in the below link. Don't worry we will also send you the below link to your email.</p>
<div><strong><a href="${privateLink}" target="_blank" rel="noopener noreferrer">${privateLink}</a></strong></div>
<p><strong>Note:</strong> Please don't share the above link (keep it secret)</p>
</div>
</div>`;
}

function emailTemplateText() {
  return `Well done! What's next!
  Aww yeah, you had successfully created this form.
  
  Share the below link with your friends:
  
  ${publicLink}
  If anyone of your friends gives feedback, we will send you an e-mail to
  
  qwerfw@e.com
  And you can view all your friends response in the below link. Don't worry we will also send you the below link to your email.
  
  ${privateLink}
  Note: Please don't share the above link (keep it secret)`;
}

exports.composeEmail = (payload) => {
  var emailConf = {
    from: process.env.fromEmailId || "info@demo.saiarlen.com", // sender address
    to: payload.toAddress, // list of receivers
    subject: payload.subject, // Subject line
    text: emailTemplateText(), // plain text body
    html: emailTemplate(
      payload.privateLink,
      payload.publicLink,
      payload.toAddress
    ), // html body
  };

  if (
    process.env.emailPassword &&
    process.env.emailUserName &&
    process.env.fromEmailId
  ) {
    transporter.sendMail(emailConf, (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log(info);
    });
  }
};
