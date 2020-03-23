require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 5000;
const USER_EMAIL = process.env.USER_EMAIL;
const USER_PASS = process.env.USER_PASS;


app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {

    const output = `
    <h2>Bteks new message from</h2>
    <div>
      <h4>Name: ${req.body.name}</h4>
      <h4>Email: ${req.body.email}</h4>
    </div>
    <h2>Message</h2>
    <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: USER_EMAIL,
        pass: USER_PASS
      }
    });

    let mailOption = {
      from: req.body.email,
      to: 'hello@bteks.co',
      subject: "Hello ✔",
      text: "",
      html: output
    }

    transporter.sendMail(mailOption, (err, data) => {
      if(err) {
        console.log("there is error to send email")
        console.log(err)
      } else {
        console.log("email sent")
        return data;
      }
    });
})



app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === "production") {
  app.get('*', function(req, res){
    res.sendFile(express.static(path.join(__dirname, 'client', 'build', 'index.html')))
  })
}

app.listen(PORT, function() {
  console.log(`server is running on port ${PORT}`)
});