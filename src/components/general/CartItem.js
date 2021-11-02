import React from 'react';
import './Cart.css'

function CartItem(props) {
    const {item} = props;
    return (
        <li className="cart__item">
            <img alt="" className="cart__item-img" style={{ backgroundImage: `url(${(item.product).image})` }} />
            <div className="cart__item-name">
                {item.product.name}
            </div>
            <div className="cart__item-price">
                ${item.product.newPrice}
            </div>
        </li>
    );
}

export default CartItem;