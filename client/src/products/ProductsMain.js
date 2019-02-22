import React from 'react';
import ProductsList from './ProductsList'
import Catagories_Main from '../sidebar/Catagories_Main';
import {NavLink} from 'react-router-dom';

class ProductsMain extends React.Component {

    state={
        products:[]
    }

    componentDidMount(){
        this.findAll();
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

    handleClick = (_id)=> {
        var answer = window.confirm('are you sure?');
        ;
        if(answer === true){
        const url = "http://localhost:3001/products/delete";
        fetch(url,{
            method:'POST',
            headers:{
                "Content-Type": "application/json"
        },
        body: JSON.stringify({
               _id:_id
        })
    })
    .then(res => {        
        if(res.ok){
            res.json().then(resJson => {
                this.findAll();
            });
        }
        })
        .catch(e => {        
        });
    }
    }

    handleLogout = () => {
        localStorage.removeItem('token')
    }


    render(){

        return(
            <div className='products_main'>
            {/* <div className='logoAndHeader'> */}
            <h1 className='header'>Products</h1>
            {/* </div> */}
                {/* <div className='adminbuttons'></div>
                <NavLink to='/adminform'>
                <button>Add New Product</button>
                </NavLink>
                <button onClick={this.handleLogout()}>Logout</button>             */}
                <div className="mainP">
                <Catagories_Main getProductsByType={this.getProductsByType} findAll={this.findAll}/>
                <ProductsList list = {this.state.products} handleClick = {this.handleClick}/>
                </div>  
            </div>

        )
    }

}



export default ProductsMain;
