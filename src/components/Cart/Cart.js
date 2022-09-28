import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h3>this is summary</h3>
                <p>selected Item:{cart.length}</p>
        </div>
    );
};

export default Cart;