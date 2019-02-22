import React from 'react'
import './App.css';
import { NavLink } from 'react-router-dom'
import Cart_Logo from './cart/Cart_Logo'

export default class Navbar extends React.Component{

   state={
        cartDB:[],
        subtotal:0
    }
     
    componentDidMount (){
         this.cartDBUpdate();  
    }

    cartDBUpdate = () => {
        let cart = localStorage.getItem('cart');
        if(cart){        
            cart = JSON.parse(cart)
            this.setState({cartDB:cart})
        }    
        this.cartTotal() 
    }
    
    cartTotal = ()=>{
                let cart = localStorage.getItem('cart');    
                cart= JSON.parse(cart)
                //debugger
                let totalCount = 0;
                cart.map((product,i)=>{
                    if(product.price){
                        totalCount += Number(product.price)
                        //debugger
                    }
                })
                this.setState({subtotal:totalCount})
            } 

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.numCart !== this.props.numCart) {
            this.cartDBUpdate();
        } 
    }

    render(){    
       
        return(
            <div > 
            <ul style={styles.navbar}>
            <li>
                <NavLink to="/">
                    <img style ={{height:'123px'}}
                        src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADe3t729vbb29sqKipDQ0N/f3/y8vL6+vomJiZwcHBJSUl3d3fU1NQ+Pj6JiYmqqqpVVVWWlpazs7N9fX05OTmhoaHn5+fOzs5oaGi/v78WFhZfX19PT0+3t7ceHh4yMjKQkJAMDAzHx8ekpKSHh4dHxdTYAAAEVElEQVR4nO3b6XaiQBAFYFtcAFfEBdeJxvj+jzjadFU3ix5PplNkOPf7JVYcuLHTNAXT6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeJbtv+a32yXZBrXVazIfDufJNZQ+Lj+iznahyGGS3d94VlW7qVsLFuvZ3fqot7r9x8bsnHK9q8vGeHfZF/5lQRNVsHxZvTilIM7fm+mtnvmJIde7quwmEKdqVD4MN2JUqc5tMejnbw301jsJ1bmBgb6sHkb2srrl4jcSqoVYMBL1q0cxstVztTrg6ncSqr1ctty17ii4uq2r8lf8rYQ7wXDahfe8Scf0mgdiSu8cN5sTvf5D1W8lPNeekH7QzuxYz/F0XkioSvOMPuqj+6MP7yZcr1Yr2o9SXaloBn1veujtzQafEk7uUdGQnVD13YSrx0ZGf/CFU6qAWb7bWG9MzUHwGcHkj/XICk2VJ6J3E+a/EhrxvzJhXy9G/jFh8psTxkj48NsT6gytTqg3Wp2wvd+hyXDQa/6pih8Oaan6Xyc8vtxvGxKuzH6XtdU2JNyY/dZft7UhIU0u9TtuQ0LqtahTXZuoDQk7N/oSVzXFViS0l6mTarEVCe1VvjpVLr99JqQ5TT5hNOCIn+W9+0xIDQT5hJ3szBFt/yLnJ+FimSQJLS1UTyJTSba2ES+Fip+EBR9ZpwHB0R5B6hZ+IOFJJlJFag/Bbdn+QMIvoUQVez6EgzOj+k94kG6XWrx8c++9+E/YwEzKbAffrt98JxxIt4OL+G/RXkn5SdinxvJVLMsTdNI48jt+Eg7pk3zHoyl8s5Df8bWmMd0g8ftOFZSQT8q+EtIfQOOPOtDSkf9efCWkibq+VyJoUz4Qbytv86qpBQ37Yw7EfzeRnuhoYJj2pjm9QadEXn57S0hLpgaGKd23/OGed9TcMJXq6tMkJj9Mpe7MVCYxMVIJ+XpfJpZD7O7aOX/9KX6JL5aQ+rLiw1QsIT18ZZf1QsQShp8NDVOT8EM3F+iMX06Y3z/Nygkjc7m1LpxqnvVL6ako6WFK5yn9KBtdAvCqjXpweilObXnb5aArW70i2pQ//KSrLz1M6Q7pehoF3I3iK1WaHs7bKLiaYeZ0y+hrGdd+uJSQexrCw/SL9qviD1U5hsRWY35pH6FN68q2FVNMGNEjdMLDNFNVMVfDmqrtAPDk4jrbcjFhZ242pa/0Kw9yF37Jk2rV6ftHi2rZaSiXEnIzT3htmh3Kx3h6We2794qrX6I7j5QShnQdIz2bbkshxuGralzseO6LVbVwW9qlhDwxiTeksp1ziJ/z4EVVTcoTYc+5qaMOaeFhAEpIJ1BqITRwCdVNd+v7d/UxGCU1U/m9OrtXD7PRpq5lPU2P+sPj0bL04aCXy3i7m7/RyL2LKAzD4On/2nld7UTByzIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC02l9zy0C84rEirQAAAABJRU5ErkJggg=="
                    />
                </NavLink>
            </li>
                <li>
                    <NavLink className='navstyle' to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className='navstyle' to="/products">
                        Products
                    </NavLink>
                </li>
                <li >
                    <NavLink className='navstyle' to="/theteam">
                        The Team
                    </NavLink>
                </li> 
                <li >
                    <NavLink className='navstyle' to="/findus">
                        Find Us
                    </NavLink>
                </li> 
                <li>
                <Cart_Logo cartCount = {this.state.cartDB.length} cartTotal = {this.state.subtotal}/> 
                </li>
            </ul>
</div>
)

}

  
}
const styles = {
    navbar : {
        display : 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60px',
        listStyle: 'none',
        position: 'sticky',
    }
}