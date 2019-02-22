import React from 'react';
import Cart_Item from './Cart_Item';

export default (props) => {

    return (
        <ul className=''>
            {props.list.map((product, i)=>{
                return <Cart_Item key = {i} product = {product} deleteAndCount = {props.deleteAndCount}/>         
            })}
        </ul>
    )
}

