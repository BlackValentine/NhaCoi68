import './../../App.css'
import './ProductItem.css'
import { useHistory } from 'react-router';

function ProductItem(props) {
    var { product } = props;
    const history = useHistory()
    const handleClick = () => {
        history.push(`/products/${product.id}`)
    }

    const onAddToCart = (product) => {
        props.onAddCart(product)
    }

    return (
        <li className="trending__item">
            <div onClick={handleClick}>
                <img alt="" className="trending__img" style={{ backgroundImage: `url(${product.image})` }} />
                <h4 className="trending__sale">Sale</h4>
                <div className="trending__product-name">
                    {product.name}
                </div>
            </div>
            <div className="trending__icon-list">
                <i
                    className="fas fa-shopping-cart trending__icon"
                    onClick={() => onAddToCart(product)}
                ></i>
                <i className="fas fa-search trending__icon"></i>
            </div>
            <div className="trending__price">
                <span className="trending__price-old">
                    ${product.oldPrice}
                </span>
                From:
                <span className="trending__price-new">
                    ${product.newPrice}
                </span>
            </div>
        </li>
    )
}

export default ProductItem;