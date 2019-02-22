import React from 'react';
import Cart_Main from '../cart/Cart_Main';



class Payment_Unsuccessful extends React.Component{

    render(){
       


        return(
            <div>
            <h1>Payment Unsuccessful</h1>
            <h2>Your order has been unsucessful please re-enter your information</h2>
            <ul>
                <Cart_Main banana = 'none'/>
            </ul>
            </div>

        )
    }

}

export default Payment_Unsuccessful;