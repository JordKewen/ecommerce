import React from 'react';
import {NavLink} from 'react-router-dom';
import ProductsMain from './ProductsMain'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import ProductInfo from './ProductInfo';



export default class ProductsItem extends React.Component{

        handleClick = () => {
            this.props.handleClick(this.props.product._id);
        }


    render(){        

            return <div className='productcontainer'>
                        {/* <button onClick={this.handleClick}>X</button>      */}
                            <div className='imgandtextdiv'>        
                                <NavLink to={`/productinfo/${this.props.product._id}`}>
                                    <img className='img-responsive' src ={this.props.product.img_url}/>
                                </NavLink>       
                            <div className='text-box'>
                                <span>{this.props.product.name}</span> 
                                <span>£{this.props.product.price}</span> 
                            </div>
                            </div>
                   </div>
    }
}
