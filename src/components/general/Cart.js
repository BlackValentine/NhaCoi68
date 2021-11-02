import React from 'react';
import { NavLink } from 'react-router-dom';
import './Cart.css'

function Cart(props) {
    return (
        <div className="cart">
            <div className="cart__header">
                Sản Phẩm Đã Thêm Vào Giỏ Hàng
            </div>
            <ul className="cart__list">
                {props.children}
            </ul>

            <div className="cart__footer">
                <NavLink
                    to='/cart'
                    exact
                    className='cart__button'
                >
                    Xem giỏ hàng
                </NavLink>
            </div>
        </div>
    );
}

export default Cart;