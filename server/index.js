require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, session = require('express-session')
, massive = require('massive')
, stripe = require('stripe')(process.env.SECRET_KEY)
, app =  module.exports = express()
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, nodemailer = require("nodemailer")
, mail_controller = require("./controllers/mail_controller.js")
, request_controller = require("./controllers/request_controller.js")
, admin_controller = require("./controllers/admin_controller.js")
, path = require('path')


//------------------MIDDLEWARES----------------
app.use(bodyParser.json());
app.use(express.static(__dirname + '../build'))

app.use(cors())

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize());       
app.use(passport.session());

//-------------------------------------------------

massive(process.env.CONNECTION_STRING).then( db => {       //it converts the sql files queries to JS functions usuable by node.
  app.set( 'db', db );
})


passport.use(new Auth0Strategy({     //configuring auth0 with passport.
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK_URL
}, 
function(accessToken, refreshToken, extraParams, profile, done) {

done(null, profile);

  
}))



//----------------------ENDPOINTS-----------------//

//----nodemailer----//
app.post('/api/send_email', mail_controller.sendEmail);
app.post('/api/send_quote', request_controller.sendQuote);

//----admin--------//
app.get('/api/quote/getquote', admin_controller.get_quote );
app.get('/api/quote', admin_controller.get_email_invoice );
// app.post('/api/quote/addimage', admin_controller.add_image);
app.post('/api/quote/addquote', admin_controller.add_quote); //done
app.patch('/api/quote/addinvoice', admin_controller.add_invoice);
app.patch('/api/quote/adddetail', admin_controller.add_detail);
app.delete('/api/quote/:id', admin_controller.delete_quote);






//-------------------AUTH0------------------
app.get('/auth', passport.authenticate('auth0'));  //backend endpoint
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REDIRECT,
    failureRedirect: '/auth'
}));
app.get('/auth/me', (req, res) => {   //if users are authenticated.
    if(!req.user){
        return res.status(404).send('User Not Found')
    } 
    return res.status(200).send(req.user);
})

app.get('/auth/logout', ( req, res ) => {
    req.logOut();
    res.redirect(302, process.env.LOGOUTREDIRECT )
})



passport.serializeUser( function( id, done ) {
    done(null, id);
})


passport.deserializeUser( function( id, done ) {
    // app.get('db').find_current_user([ id ])
    // .then( user => {
        done(null, id)
    // })
})



//---------STRIPE---------
app.post('/api/payment', function(req, res, next){
//convert amount to pennies
const amountArray = req.body.amount.toString().split('');
const pennies = [];
for (var i = 0; i < amountArray.length; i++) {
if(amountArray[i] === ".") {
  if (typeof amountArray[i + 1] === "string") {
    pennies.push(amountArray[i + 1]);
  } else {
    pennies.push("0");
  }
  if (typeof amountArray[i + 2] === "string") {
    pennies.push(amountArray[i + 2]);
  } else {
    pennies.push("0");
  }
    break;
} else {
    pennies.push(amountArray[i])
}
}
const convertedAmt = parseInt(pennies.join(''));

const charge = stripe.charges.create({
amount: convertedAmt, // amount in cents, again
currency: 'usd',
source: req.body.token.id,
description: 'Test charge from react app'
}, function(err, charge) {
if (err) return res.sendStatus(500)
return res.sendStatus(200);

});
});

app.get('*', (req, res)=>{
    console.log("None Met");
    res.sendFile(path.join(__dirname, '..','build','index.html'));
  })

app.listen(3001, () => {
console.log('Listening to port: ', 3001)}); 