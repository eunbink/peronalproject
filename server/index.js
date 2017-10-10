require('dotenv').config();
const express = require('express')
, bodyParser = require('body-parser')
, cors = require('cors')
, stripe = require('stripe')(process.env.SECRET_KEY)
, app =  module.exports = express();


app.use(bodyParser.json());
app.use(cors())


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



app.listen(3001, () => {
console.log('Listening to port: ', 3001)}); 