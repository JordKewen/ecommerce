import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input'
import CheckoutP from './Checkout';
import Checkout from './stripe_checkout';
import axios from 'axios';


class Checkout_Form extends React.Component{

  state={
    firstname:'',
    lastname:'',
    emailaddress:'',
    phonennumber:'',
    streetname:'',
    city:'',
    postalcode:''
  }



handleChange = (e) => {   
    this.setState({[e.target.name]:e.target.value})
    console.log(this.state)
}

handleSubmit = () => {
  console.log(this.state)
  
  const url = "http://localhost:3001/email/email";
  console.log('===>checkout form',this.state.emailaddress)
  axios.post(url,{
    
      emailaddress: this.state.emailaddress
      
  }).then((res)=>{
      // const token = res.data.token;
      // localStorage.setItem('token', token);
  }).catch((err)=>{
      
  })
    
};


 render() {
  return (
    <div>

      <Input
        onChange={this.handleChange} name='firstname'
        placeholder="First Name"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        onChange={this.handleChange} name='lastname'
        placeholder="Last Name"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      <Input
        onChange={this.handleChange} name='emailaddress'
        placeholder="Email Address"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
        <Input
        onChange={this.handleChange} name='phonenumber'
        placeholder="Phone Number"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
            <Input
        onChange={this.handleChange} name='streetname'
        placeholder="Street Name"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
         <Input
         onChange={this.handleChange} name='city'
        placeholder="City"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
         <Input
        onChange={this.handleChange} name='postalcode'
        placeholder="Postal Code"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      {/* <button  onClick={this.handleSubmit}>Pay</button> */}
      <Checkout
      amount={this.props}
      emailaddress={this.state.emailaddress}
      />
    </div>
  );
}

}





export default Checkout_Form;