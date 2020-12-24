import nodemailer from "nodemailer";

export async function sendEmail(to: string,html: string) {
//   let testAccount = await nodemailer.createTestAccount();
//   console.log('testAccount', testAccount)

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'x5crxllutcgwqhre@ethereal.email', // generated ethereal user
      pass: 'kGC3ekuGJEwp6v3KFF', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: to, // list of receivers
    subject: "Change Password", // Subject line
    html,
  });

  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}
