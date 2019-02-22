import React from 'react';
import axios from 'axios';

class Admin_Login extends React.Component{

    state={
        username:'',
        password:''
    }

    handleSubmit = () => {
        console.log(this.state)
        
        const url = "http://localhost:3001/admin/login";
            
        axios.post(url,{
            username: this.state.username,
            password: this.state.password
        }).then((res)=>{
            const token = res.data.token;
            localStorage.setItem('token', token);
        }).catch((err)=>{
            
        })
          
      };

    handleChange = (e) => {
       // console.log(e.target.value)
            this.setState({[e.target.name]:e.target.value})
        }

    render(){
        return(
            <div className='adminnewitem'>
                <input onChange={this.handleChange} name='username' placeholder='username'/>
                <input onChange={this.handleChange} name='password' placeholder='password'/>
                <button onClick={this.handleSubmit}>login</button>
            </div>
        )
    }

}

export default Admin_Login;