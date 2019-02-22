import React from 'react';
import Upload_Image_Button from './Upload_Image_Button'
import {NavLink} from 'react-router-dom';

class Admin_NewItem_Form extends React.Component{

    state={
        name:'',
        description:'',
        price:'',
        img_url:'',
        img_id:'',
        type:''
    }

    getImage = (url,id) => {        
      this.setState({img_url:url,img_id:id},()=>{
          console.log(this.state)
      })
     
    }

    handleSubmit = () => {
        ;
          const url = "http://localhost:3001/products/add";
            fetch(url,{
                method:'POST',
                headers:{
                    "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:this.state.name,
                description:this.state.description,
                price:this.state.price,
                img_url:this.state.img_url,
                img_id:this.state.img_id,
                type:this.state.type
            })
         })
         .then(res => {
            res.json().then(resJson => {
                 this.props.history.push('/products');
            });
          })
          .catch(e => {
            
          });
          
      };
      

    handleChange = (e) => {   
        this.setState({[e.target.name]:e.target.value})
    }

    render(){
        return(
            <div className='adminnewitem'>
                <input onChange={this.handleChange} name='name' placeholder='Name'/>
                <input onChange={this.handleChange} name='description' placeholder='Product description'/>
                <input onChange={this.handleChange} name='price' placeholder='Price'/>
                <input onChange={this.handleChange} name='type' placeholder='Type'/>
                <Upload_Image_Button getImage={this.getImage}/>
                <button onClick={this.handleSubmit}>confirm</button>
                <NavLink to ='/products'>
                <button>cancel</button>    
                </NavLink>           
            </div>
        )
    }

}

export default Admin_NewItem_Form;