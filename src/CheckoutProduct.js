import React from 'react'
import { useStateValue } from './StateProvider'

function CheckoutProduct(id,title,image,price) {
     const [{cart },dispatch] = useStateValue();
    const DeleteFromCart= () => {
    dispatch({
        type: "DELETE_FROM_CART",
        id: id,

    })
    };


    return (
        <div className="checkoutProduct">
            <img classname="checkoutProduct__image" src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                <strong>€ </strong>
                   <strong>{price}</strong> 
              </p>
              <button onclick= {DeleteFromCart}>Delete Item</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
 