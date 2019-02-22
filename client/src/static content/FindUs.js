import React, { Component } from 'react';

class FindUs extends Component {
  render() {
    return(
    <div className='finduscontainer'>
    <h1 className='header'>Find Us</h1>
    <div className='findustext'>
    <pre>26 Beauchamp Pl
      <p>Knightsbridge</p>
      <p>London</p>
         SW3 1NJ
    </pre>
    <pre>
      Phone:0121-2121
      Email:contact@sourskate.com 
      <p>Mon - Sat 12am-8pm</p>
    </pre>
    </div>
    <div className='imgsandmap'>
        <iframe className='findusmap'
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18872.607690905723!2d-0.17685172487720516!3d51.49595189896971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053f63aeae33%3A0x9904a619093eae2f!2sEdward+Sexton!5e0!3m2!1sen!2ses!4v1543852203079" >
    </iframe>     
    <img src='https://static1.squarespace.com/static/54e5f452e4b0a1f7a942dfbc/t/5b9fdf631ae6cf63ccc1c585/1537204082719/sour+shop+%281+de+33%29.jpg'/>
    <div className='findusimg2'>
    <img src='https://static1.squarespace.com/static/54e5f452e4b0a1f7a942dfbc/t/5b9fdec3032be450d747c3f9/1537203923816/sour+shop+%2816+de+33%29.jpg?format=2500w'/>
    </div>
    </div>
    </div>
    )
  
  }
}

export default FindUs;