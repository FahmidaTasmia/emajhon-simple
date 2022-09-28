import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
let total=0;
for(const product of cart){
    total = total+product.price;
}
    return (
        <div className='cart'> 
             <h3>this is summary</h3>
            <p>selected Item:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:</p>
            <p>Tax:</p>
            <h5>Grand Total:</h5>
        </div>
    );
};

export default Cart;