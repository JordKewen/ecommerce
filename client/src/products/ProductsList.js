import React from 'react';
import ProductsItem from './ProductsItem';
import { NavLink } from 'react-router-dom';

export default (props) => (
    <ul className='product_grid'>
        {props.list.map((product, i)=>{
            return <ProductsItem  key = {i} product = {product} handleClick = {props.handleClick}/>   
        })}
    </ul>
)