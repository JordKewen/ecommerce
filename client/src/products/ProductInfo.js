import React from 'react';
import Catagories_Main from '../sidebar/Catagories_Main';
import axios from 'axios';
import addToCart from '../addToCart';

class ProductInfo extends React.Component{

    state={
        product:{},
    }

componentDidMount = () => {
    const url = `http://localhost:3001/products/${this.props.match.params.productID}`;            
    axios.get(url)
    .then(res => {
        console.log(res)
        this.setState({product:res.data})
        console.log(url)
         console.log('RES DATADATADATA',res.data)
        }).catch((err)=>{   
            console.log('YAV FUKEN NACKED IT LAD')     
    })
    
}

    handleCount = (num) => {
        num++
    }

    handleAddToCartClick = () => {
        this.props.handleClickCart();
        addToCart(this.state.product);
    }
    findAll=()=>{
        console.log("holaaaaaaaaa")
        const url = "http://localhost:3001/products/display" 
        fetch(url).then(res => {            
            res.json().then(myArr => {
            this.setState({products:myArr})
            });
        })
        .catch(e => {
            console.log()
        }); 
    }

    getProductsByType=(type)=>{
        console.log(type)
         const url = `http://localhost:3001/products/type/${type}` 
         fetch(url).then(res => {
           res.json().then(myArr => {
               console.log(res)
            this.setState({products:myArr},()=>{console.log(this.state.products)})
            });
         })
         .catch(e => {
            
          });
    }


    render(){
        
        return(
            <div>
            <h1 className='header'>Product Info</h1>
            <Catagories_Main getProductsByType={this.getProductsByType} findAll={this.findAll}/>  
            <div className='product_info_text'>
            <h2 className='product_description_name'>{this.state.product.name}</h2>
            <h3 className='product_description_text'>{this.state.product.description}</h3>
            <h4 className='product_description_price'>£{this.state.product.price}</h4>
            <button className='product_description_button' onClick={this.handleAddToCartClick}>ADD TO CART</button>
            </div>
            <img className='product_description_img' src ={this.state.product.img_url}/>

            </div>
        )
    }


}

export default ProductInfo;