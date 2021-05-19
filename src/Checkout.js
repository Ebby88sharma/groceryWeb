import React from 'react';
import "./Checkout.css";
import {useStateValue} from"./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Item from './Item';

function Checkout() {

    const [{cart},dispatchn] = useStateValue();
    return (
        <div className="checkout">
            {cart?.length===0 ? (
                <div>
                    <h2>Your cart is Empty</h2>
                    <p>There is nothing in your cart. Please add to cart, if you want to buy something</p>
                </div>
            ) : (
                <div>
                    <h2 >Your Shopping Cart</h2>
                    
                    {cart.map(item=>(
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price}
                           />
                    ))}
                   
                </div>
            )}  
        </div>
    )
}

export default Checkout
