import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar'
import TheTeam from './static content/TheTeam';
import FindUs from './static content/FindUs';
import Footer from './Footer'
import ProductsMain from './products/ProductsMain';
import ProductInfo from './products/ProductInfo';
import Cart_Main from './cart/Cart_Main';
import Checkout from './checkoutcomp/Checkout';
import Payment_Successful from './checkoutcomp/Payment_Successful';
import Payment_Unsuccessful from './checkoutcomp/Payment_Unsuccessful';
import Admin_Login from './admin/Admin_Login';
import Admin_NewItem_Form from './admin/Admin_NewItem_Form';
import Home from './static content/Home';
import Cart_Item from './cart/Cart_Item';



class Router extends Component {
  state = {
    num: 0
  }
  handleClickCart =  () => {
    this.setState({num: this.state.num+1})
  }
  render() {
    return(
    <BrowserRouter>
        <div>
          <Navbar numCart={this.state.num}/>          
          <div className="container">
          <div>
            <Route exact path = '/' component = {Home}/>
          </div>
            <Route path = "/theteam" component = {TheTeam}/>
            <Route path = "/findus" component = {FindUs}/>
            <Route path = '/products' component = {ProductsMain}/>
            <Route path = '/productinfo/:productID' exact render={props => (<ProductInfo {...props} numcart={this.state.num} handleClickCart={this.handleClickCart}/>)}/>
            <Route path = '/cart' exact render={props => (<Cart_Main {...props} numcart={this.state.num} handleClickCart={this.handleClickCart}/>)}/>
            <Route path = '/checkout' component = {Checkout}/>
            <Route path = '/paymentsuccessful' component = {Payment_Successful}/>
            <Route path = '/paymentunsuccessful' component = {Payment_Unsuccessful}/>
            <Route path = '/admin' component = {Admin_Login}/>
            <Route path = '/adminform' component = {Admin_NewItem_Form}/>
            </div>
          <Footer/>
        </div>
    </BrowserRouter>
    )
      
  }
}

export default Router;
