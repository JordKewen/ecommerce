import React, { Invalid_defaultProps } from 'react';

export default (props) => {

    // handleAddToCartClick = () => {
    //     props.handleClickCart();
    //     props.deleteCartItem(props.product._id);   
    // }

    // onClick={()=>props.deleteCartItem(props.product._id)}
    
    return  <div>
            <ul className='product_grid'>
                <li className='checkout_img'><img src ={props.product.img_url}/></li>
                <div className='remove_checkout'>
                <li className='remove_button'><button onClick={()=>props.deleteAndCount(props.product._id)}>Remove</button></li>
                <li>{props.product.name}</li>
                <li>£{props.product.price}</li>
                </div>
            </ul>
            </div>
}