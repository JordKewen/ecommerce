import React from 'react';


class Cart_Logo extends React.Component{

    render(){

        if(this.props.cartcount === 0){
            return null
        }else if(this.props.cartCount == 1){
        return(
            <div className='fullcart'>
                <a href='/cart' className='cartheading'>CART</a>
                <div className='cartfooter'>
                    <span className='cartcount'>{this.props.cartCount}</span>
                    <span className='cartlabel'> ITEM</span>
                    <span className='cartamount'> £{this.props.cartTotal}</span>
                    <span> </span>
                </div>
            </div>
        )
        } else {
            return (
                <div className='fullcart'>
                <a href='/cart' className='cartheading'>CART</a>
                <div className='cartfooter'>
                    <span className='cartcount'>{this.props.cartCount}</span>
                    <span className='cartlabel'> ITEMS</span>
                    <span className='cartamount'> £{this.props.cartTotal}</span>
                    <span> </span>
                </div>
            </div>
            )
        }
    }


}

export default Cart_Logo;