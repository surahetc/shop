import React from 'react'
import './css/Item.css'

function Item(props) {
    return (
        <div className="item">
            <p>Name :{props.title}</p>
            <img src={props.src} alt="item"></img>
            <p>Price : Rs {props.price}</p>

            <button>Add to Cart</button>
            <button >Add to Wish List</button>

        </div>
    )
}

export default Item
