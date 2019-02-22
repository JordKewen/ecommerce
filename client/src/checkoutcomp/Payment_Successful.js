import React from 'react';
import Continue_Shopping_Button from './Continue_Shopping_Button';
import Cart_Main from '../cart/Cart_Main';


class Payment_Successful extends React.Component{

    render(){
       


        return(
            <div>
            <h1>Payment Successful</h1>
            <h2>Your order has been successful and confirmation has been sent to your email address</h2>
            <h3>Total</h3>
            <h4>£---</h4>
            <Continue_Shopping_Button/>
            <h4>Purchased items</h4>
            <ul>
                <Cart_Main banana='none'/>
            </ul>
            </div>

        )
    }

}

export default Payment_Successful;