import React from 'react'
import "./Item.css";
import {useStateValue} from"./StateProvider";


function Item({id, title, image,price}) {
const [ {}, dispatch] = useStateValue();
const addTocart=() => {
// Add item in cart
dispatch({
    type: 'ADD_TO_CART',
    item:{
        id:id,
        title:title,
        image:image, 
        price:price
    },
})
}


    return (
        <div className="item">
            <div className="item__info">
            <p>{title}</p>
            <p className="item__price">
               <strong>€ </strong>
               <strong>{price}</strong>
               </p>
            
            </div>
            <img src={image} alt=""/>
            <button onClick={addTocart}>Add to cart</button>
        </div>
    )
}

export default Item
