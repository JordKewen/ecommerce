export default product => {
    console.log(product)
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(!cart){
        let cart = [] ;
        cart.push(product) 
        localStorage.setItem('cart', JSON.stringify(cart))
    }else{
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart))
    }
    console.log(localStorage.getItem('cart'));
}