import React from 'react';
import Cart_List from './Cart_List'
import Cart_Checkout_button from './Cart_Checkout_button';
import CartLogo from  './Cart_Logo'
import Navbar from '../Navbar';
import Checkout from '../checkoutcomp/Checkout'


class Cart_Main extends React.Component{

    state = {
        cartDB:[],
        subtotal:0
    }

componentDidMount (){
    let cart = localStorage.getItem('cart');
    if(cart){        
        cart = JSON.parse(cart)
        this.setState({cartDB:cart})
    }

    this.cartTotal()


}

deleteCartItem = (_id)=>{
    var answer = window.confirm(`Are you sure?`);
    if(answer === true){
        let cart = localStorage.getItem('cart');    
        cart= JSON.parse(cart)
            let index = cart.findIndex((product)=>product._id === _id);
            cart.splice(index,1)
                this.setState({cartDB:cart})
                localStorage.setItem('cart',JSON.stringify(cart))
                this.forceUpdate()
    }}

cartTotal = ()=>{
    let cart = localStorage.getItem('cart');    
    cart= JSON.parse(cart)
    //debugger
    let totalCount = 0;
    cart.map((product,i)=>{
        if(product.price){
            totalCount += Number(product.price)
            //debugger
        }
    })
    this.setState({subtotal:totalCount})
}
    handleDeleteFromCart = (e) => {
        this.props.handleClickCart();
        this.deleteCartItem(e);   
    }

    render(){
       
        return(
            <div>
                    <h1 className='header'>Cart</h1>
                <ul>
                    {/* <h2 style={{display:this.props.banana}} className='subtotaltitle'>Subtotal</h2>
                    <h3 style={{display:this.props.banana}} className='subtotal'>£{this.state.subtotal}</h3> */}
                {/* <div style={{display:this.props.banana}}> */}
                <div className='checkoutbutton'>
                    <Cart_Checkout_button />
                </div>
                {/* </div> */}
                    <Cart_List list = {this.state.cartDB} deleteAndCount={this.handleDeleteFromCart}/>  
                </ul>          
            </div> 
                
        )
    }


}

export default Cart_Main;