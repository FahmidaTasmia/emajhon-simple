import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

   const products =useLoaderData();
    const[cart,setCart]=useState([])
   
     
    

    const handleClick =(selectedProduct)=>{
        let newCart =[];
        const exists = cart.find(product=>product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1;
            newCart=[...cart,selectedProduct]
        }
        else{
            const rest = cart.filter(product=>product.id!==selectedProduct);
            exists.quantity = exists.quantity+1;
            newCart = [...rest, exists];
        }
     
      setCart(newCart);
      addToDb(selectedProduct.id)
            }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id}
                    product={product}
                    handleClick={handleClick}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;