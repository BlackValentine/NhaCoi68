import React from 'react';
import {connect} from 'react-redux'
import Cart from '../components/general/Cart';
import CartItem from '../components/general/CartItem';

function CartContainer(props) {
    const {cart} = props;
    const showCartItem = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key={index} 
                        item={item}
                    />
                )
            })
        }
        return result;
    }
    return (
        <div>
            <Cart>
                {showCartItem(cart)}
            </Cart>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartContainer);