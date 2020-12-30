/*
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
    to: 'patelvandan00007@gmail.com',
    from: 'pavandan@sheridancollege.ca',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

*/

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
    sendgridTransport({
        auth: {
            api_key:
            process.env.SENDGRID_API_KEY        }
    })
);

transporter.sendMail({
        to: 'patelvandan00007@gmail.com',
        from: 'pavandan@sheridancollege.ca',
        subject: 'Sending with Twilio SendGrid is Fun',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
    })
        .catch(err => {
        const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
});

