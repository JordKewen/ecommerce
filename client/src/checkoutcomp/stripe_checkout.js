import React from 'react'
import axios from 'axios';

// import stripe checkout first
import StripeCheckout from 'react-stripe-checkout';


// that's your publishable jey obtained form strip, for testing use testing key
const STRIPE_PUBLISHABLE = 'pk_test_47IIvaiJ7FanzzHsVr7vaEKH';

// this will be the route to hit on the server after getting token from stripe
const PAYMENT_SERVER_URL = ' http://localhost:3001/stripe/purchase';


const cartTotal = ()=>{
    let cart = localStorage.getItem('cart') || [];    
    cart= JSON.parse(cart)
  
    let totalCount = 0;
    cart.map((product,i)=>{
        if(product.price){
            totalCount += Number(product.price)
        } 
	})
	console.log('totalCount',totalCount)
	return totalCount
}
const CURRENCY = 'EUR';

let amount = cartTotal()

const fromEuroToCent = amount => amount * 100;

const successPayment = (data, props) => {
	debugger
	const url = "http://localhost:3001/email/email";

	axios.post(url,{
		emailaddress: 'kewen_j@hotmail.co.uk'
	}).then((res)=>{
		// const token = res.data.token;
		// localStorage.setItem('token', token);
	}).catch((err)=>{
		
	})
	alert('Payment Successful');
	console.log(data);
};

const errorPayment = data => {
	alert('Payment Error');
	console.log(data);
};

const onToken = (amount, description, props) => token =>
axios.post(PAYMENT_SERVER_URL,
{
	description,
	source: token.id,
	currency: CURRENCY,
	amount: fromEuroToCent(amount)
})
.then(successPayment, props)
.catch(errorPayment);

const Checkout = (props) =>{
	debugger
	return(
	<StripeCheckout
		amount={fromEuroToCent(cartTotal())}
		token={onToken(amount ,'payment', props)}
		currency={CURRENCY}
		stripeKey={STRIPE_PUBLISHABLE}
	/>	
	)
}


export default Checkout;
