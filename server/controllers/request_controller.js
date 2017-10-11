const nodemailer = require('nodemailer')
, config = require('./../../config');

module.exports ={
    sendQuote(req, res) {
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
            from: `Eunbin <${config.nodemailer.user_email}>`, // sender address
            to: req.body.to, // list of receivers
            subject: req.body.subject, // Subject line
            text: 'Making breadsticks', // plain text body
            html: `<ul><b>name:</b>${ req.body.name}</ul>
                    <ul><b>email:</b>${ req.body.email }</ul>
                    <ul><b>phoneNumber:</b>${ req.body.phoneNumber }</ul>
                    <ul><b>design type:</b>${ req.body.designType }</ul>
                    <ul><b>size:</b>${ req.body.size }</ul> 
                    <ul><b>color:</b>${ req.body.color }</ul>
                    <ul><b>sides:</b>${ req.body.sides }</ul>
                    <ul><b>single/double:</b>${ req.body.singleDouble }</ul>
                    <ul><b>quantity:</b>${ req.body.quantity }</ul>
                    <ul><b>due date:</b>${ req.body.dueDate }</ul>
                    <ul><b>comments:</b>${ req.body.comments }</ul>`

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