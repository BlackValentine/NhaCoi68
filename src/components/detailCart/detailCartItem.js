import React from 'react';
import './detailCart.css';

function DetailCartItem(props) {
    const {item} = props
    const showTotalPrice = (item) => {
        var result = 0;
        result = item.product.newPrice * item.quantity
        return result;
    }
    return (
        <tbody>
            <tr className="detailCart__item">
                <td>
                    <img className="detailCart__item-img" style={{ backgroundImage: `url(${item.product.image})` }} />
                </td>
                <td>
                    <div className="detailCart__item-name">
                        {item.product.name}
                    </div>
                    <div className="detailCart__item-description">
                        Loại: {item.product.type}
                    </div>
                    <div className="detailCart__item-price">
                        ${item.product.newPrice}
                    </div>
                </td>
                <td>
                    <div className="detailCart__item-totalPrice">
                        ${showTotalPrice(item)}
                    </div>
                </td>
            </tr>
        </tbody>
    );
}

export default DetailCartItem;