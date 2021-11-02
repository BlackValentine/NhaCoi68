import React from 'react';
import './detailCart.css'

function DetailCartResult(props) {
    const {cart} = props;
    const showBill = (cart) => {
        var result = 0;
        if(cart.length >0) {
            for(var i=0; i < 3; i++) {
                result += cart[i].product.newPrice * cart[i].quantity
            }
            return result
        }
    }
    return (
        <div className="detailCart__checkout">
            <h2 className="detailCart__checkout-message">Cảm ơn bạn đã mua hàng</h2>
            <div className="detailCart__checkout-info">
                <div className="detailCart__checkout-subtotal">
                    <h2 className="detailCart__checkout-title">Tổng tiền:</h2>
                    <h1 className="detailCart__checkout-price">${showBill(cart)}</h1>
                </div>
                <h3 className="detailCart__checkout-subtitle">Phí ship, taxes và giảm giá sẽ được tính tại Check out</h3>
                <button className="button detailCart__checkout-button">
                    Check out
                </button>
            </div>
        </div>
    );
}

export default DetailCartResult;