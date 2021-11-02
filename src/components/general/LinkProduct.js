import './LinkProduct.css'
import './../../App.css'
import { useRouteMatch } from 'react-router';
import useProductDetail from '../products/hooks/useProductDetail';
import { NavLink } from 'react-router-dom';

function LinkProduct() {
    const { params: { productId } } = useRouteMatch()
    const { product } = useProductDetail(productId)
    return (
        <div className='header__link-product'>
            <div className='container'>
                <div className='header__link'>
                    <NavLink
                        to='/'
                        exact
                        className="header__link-active"
                    >
                        Home
                    </NavLink>
                    <i className="fas fa-angle-right header__link-icon"></i>
                    <NavLink
                        to='/products'
                        exact
                        className="header__link-active"
                    >
                        Products
                    </NavLink>
                    <i className="fas fa-angle-right header__link-icon"></i>
                    <span className='header__link-none'>{product.name}</span>
                </div>
            </div>
        </div>
    );
}

export default LinkProduct;
