import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    const{name,seller,img,ratings,price }=props.product;
    

    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
           <h5 className='product-name'>{name}</h5>
           <p>price:${price}</p>
           <p>seller:{seller}</p>
           <p><small>Ratings:{ratings} Star</small></p>
           </div>
           <button onClick={()=>props.handleClick(props.product)}  className='btn-cart'><p className='btn-text'>Add to cart</p><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></button>

        </div>
    );
};

export default Product;