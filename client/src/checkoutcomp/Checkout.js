import React from 'react';
import Checkout_Form from './Checkout_Form';




class Checkout extends React.Component{

    state = {
        email : '',
        firstname : '',
        lastname : '',
        streetname: '',
        city : '',
        postalcode: '',
        phonenumber: '',

    }

    render(){
        console.log('===>checkout ',this.props)
        return(
            <div>
                <h1>Checkout</h1>
                <h2>Total</h2>
                <h3>£{this.props.subtotal}</h3>
                <Checkout_Form
                emailaddress={this.props.emailaddress}
                subtotal = {this.props}
                />
            </div>
        );

    }

}
export default Checkout;