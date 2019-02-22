const postStripeCharge = res => (stripeErr, stripeRes) => {
	if (stripeErr) {
        console.log(' E R R O R',stripeErr)
		res.status(500).send({ error: stripeErr });
	} else {
        console.log('S U C C E S S ',stripeRes)
		res.status(200).send({ success: stripeRes });
	}
}
var stripe = require("stripe")("sk_test_mA0QCmRuBeXyE0S25rY56s71");

class StripeController {



    stripePurchase(req, res){
        console.log('called?')
        stripe.charges.create(req.body, postStripeCharge(res));
    }
    

}




module.exports = new StripeController();