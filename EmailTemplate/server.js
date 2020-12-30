var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
    auth: {
        api_user: 'support@skillsquirrel.com',
        api_key: '24Cheesedoodles'

    }
};
const obj = {
    subject: "Template Demo",
    heading: "Subscription ",
    description: " Welcome to SkillsSquirrel. Hope you have a good day ",
    fname: " (First ",
    lname: "Last Name)"
};

var client = nodemailer.createTransport(sgTransport(options));

let htmlTemplate = `
    <html>
    <body>
    <h2>${obj.heading }</h2>
    <h4>Hi ${obj.fname} ${obj.lname}</h4>
    <link>${obj.description} <link>https://www.google.com/</link></p>
    <p>Thank you</p>
    
</body>
</html>
    `

var email = {
    from: 'support@skillsquirrel.com',
    to: 'patelvandan00007@gmail.com',
    subject: obj.subject,
    html: htmlTemplate
};

client.sendMail(email, function(err, info){
    if (err ){
        console.log(err);
    }
    else {
        console.log('Message sent: Mail Sent Successfully' );
    }
});
