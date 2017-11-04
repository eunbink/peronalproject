const nodemailer = require('nodemailer')
, config = require('./../../config');

module.exports ={
    sendEmail(req, res) {
        console.log('req.body', req.body)


        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: config.nodemailer.service,
            auth: {
                user: config.nodemailer.user_email,
                pass: config.nodemailer.user_pass
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: ` <${config.nodemailer.user_email}>`, // sender address
            to: req.body.to, // list of receivers
            subject: req.body.subject, // Subject line
            text: 'Making breadsticks', // plain text body
            html: `<p><b style="color:black;">Name: </b> ${ req.body.name }</p>
                   <p><b style="color:black;">Email: </b> ${ req.body.email }</p>
                   <p><b style="color:black;">Message: </b> ${ req.body.message }</p>`
       
        };


        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                res.send(error)
            }
            console.log('Message %s send: %s',  info);
            res.status(200).send(info);
        });

    }

}