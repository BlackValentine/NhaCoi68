
import { useHistory } from 'react-router'
import './../../App.js'
import './ProductsNav.css'
import queryString from 'query-string'


function ProductsNav(props) {

    const history = useHistory()
    const { match } = props

    const handleShowRattanBag = () => {
        const queryParams = { filter: 'RattanBag' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowSedgeBag = () => {
        const queryParams = { filter: 'SedgeBag' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowHat = () => {
        const queryParams = { filter: 'Hat' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }

    const handleShowDecor = () => {
        const queryParams = { filter: 'Decor' }
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        })
    }


    return (
        <div className='products__nav'>
            <div className='products__categories'>
                <div className='products__nav-title'>
                    Product Categories
                </div>
                <ul className='products__nav-list'>
                    <li className='products__nav-item'>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Tổng hợp</span>
                    </li>
                    <li className='products__nav-item' onClick={handleShowSedgeBag}>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Túi Cói</span>
                    </li>
                    <li className='products__nav-item' onClick={handleShowRattanBag}>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Túi Mây</span>
                    </li>
                    <li className='products__nav-item' onClick={handleShowHat}>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Mũ</span>
                    </li>
                    <li className='products__nav-item' onClick={handleShowDecor}>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Decor cho nhà và bếp</span>
                    </li>
                </ul>
            </div>

            <div className='products__filter'>
                <div className='products__nav-title'>
                    Best Seller
                </div>
                <ul className='products__nav-list'>
                    <li className='products__nav-item'>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Túi đeo</span>
                    </li>
                    <li className='products__nav-item'>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Túi đeo vai</span>
                    </li>
                    <li className='products__nav-item'>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Túi cầm tay</span>
                    </li>
                    <li className='products__nav-item'>
                        <i className="fas fa-angle-right products__nav-icon"></i>
                        <span className='products__nav-text'>Balo</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductsNav;