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
            html: `<ul><b style="color:red;">Name: </b>${ req.body.name}</ul>
                    <ul><b style="color:red;">Email: </b>${ req.body.email }</ul>
                    <ul><b style="color:red;">Phone Number: </b>${ req.body.phoneNumber }</ul>
                    <ul><b>Design Type: </b>${ req.body.designType }</ul>
                    <ul><b>Size: </b>${ req.body.size }</ul> 
                    <ul><b>Color: </b>${ req.body.color }</ul>
                    <ul><b>Sides: </b>${ req.body.sides }</ul>
                    <ul><b>Single/Double: </b>${ req.body.singleDouble }</ul>
                    <ul><b>Quantity: </b>${ req.body.quantity }</ul>
                    <ul><b>Decal Type: </b>${ req.body.decal }</ul>
                    <ul><b>Due Date: </b>${ req.body.dueDate }</ul>
                    <ul><b>Comments: </b>${ req.body.comments }</ul>
                    <ul><b>Image: </b>${ req.body.image }</ul>`

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