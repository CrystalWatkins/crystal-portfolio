const nodemailer = require("nodemailer");
require("dotenv").config();


const sendEmail = (from, subject, text) => {

//Step 1
let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "crystalwatkins428@gmail.com",
        pass: "pxctjzrxtejutfmj"
    }
});

//Step 2
let mailOptions = {
    from: from,
    to: "crystalwatkins428@gmail.com",
    subject: subject,
    text: text,
};

//Step 3
transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log("Error")
    }else {
        console.log("Email sent!", data.response)
    }
});
};

module.exports = sendEmail;

