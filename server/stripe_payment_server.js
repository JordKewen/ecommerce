var compression = require('compression')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const cors = require('cors');
app.use(compression())
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/
app.use(cors());
app.options('*', cors());


const postStripeCharge = res => (stripeErr, stripeRes) => {
	if (stripeErr) {
		res.status(500).send({ error: stripeErr });
	} else {
		res.status(200).send({ success: stripeRes });
	}
}

// this is you secret key, use test key for development and live key for production
var stripe = require("stripe")("sk_test_mA0QCmRuBeXyE0S25rY56s71");
app.post("/purchase", function(req, res){
	stripe.charges.create(req.body, postStripeCharge(res));
})



var PORT = process.env.PORT || 8080
app.listen(PORT, function() {
	console.log(`Serving my master on port ${PORT}!`)
})
