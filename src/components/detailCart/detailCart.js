import React from 'react';
import './detailCart.css';
import './../../App.css';
import DetailCartResult from './detailCartResult';
import DetailCartItem from './detailCartItem';

function DetailCart(props) {
    const {cart} = props;
    const showDetailCart = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <DetailCartItem 
                        key={index}
                        item={item}
                    />
                )
            })
        }

        return result;
    }

    return (
        <div className="section container grid">
            <h2 className="detailCart__title">
                Giỏ hàng của bạn
            </h2>

            <table className="detailCart__table">
                <thead>
                    <tr className="table__header">
                        <th>IMAGE</th>
                        <th>PRODUCT</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                {showDetailCart(cart)}
            </table>
            <DetailCartResult cart={cart}/>
        </div>
    );
}

export default DetailCart;