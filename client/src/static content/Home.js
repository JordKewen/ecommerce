import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
  render() {
    return(      
            <div className='homeimgs'>
              <h1 className='homeheader'>SOUR SKATEBOARDS</h1>              
                    <img id='1' src='https://static1.squarespace.com/static/54e5f452e4b0a1f7a942dfbc/t/5c6c4560085229e6fdb62f5e/1550599538913/free22COVER.jpg?format=2500w'/>
                    <img id='2' src="https://static1.squarespace.com/static/54e5f452e4b0a1f7a942dfbc/t/5b8d6e73758d467f377c510a/1535995659552/colllaaaggge?format=2500w"/>
                    <img src="https://static1.squarespace.com/static/54e5f452e4b0a1f7a942dfbc/t/5c103818898583a27a7fe331/1544566867973/p01-cover-v2.jpg?format=2500w"/>
           </div>
            
    )
      
  }
}

export default Home;