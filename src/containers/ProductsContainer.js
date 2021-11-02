import Products from './../components/products/Products'
import { connect } from 'react-redux'
import ProductItem from '../components/products/ProductItem';
import { useEffect, useState } from 'react';
import productApi from '../api/productApi';
import { useLocation, useRouteMatch } from 'react-router';
import queryString from 'query-string'
import {actAddToCart} from './../actions/index'

function ProductsContainer(props) {
    const {onAddToCart} = props;
    const location = useLocation()
    const match = useRouteMatch()
    const [products, setProducts] = useState([])
    const [filteredType, setFilteredType] = useState(() => {
        const params = queryString.parse(location.search)
        return params.filter || 'all'
    })
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    useEffect(() => {
        const params = queryString.parse(location.search)
        setFilteredType(params.filter || 'all')
    }, [location.search])

    //Goi danh sach san pham
    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await productApi.getAll();
            setProducts(productList)
        };
        fetchProducts()
    }, [])

    const renderedProductsList = products.filter(product => filteredType === 'all' || filteredType === product.filterCategories)

    //Define ham
    var showProducts = (products) => {
        var result = null;
        result = products.map((product, index) => {
            return (
                <ProductItem
                    key={index}
                    product={product}
                    onAddCart={onAddToCart}
                />
            )
        })
        return result;
    }

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = renderedProductsList.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <Products match={match} postsPerPage={postsPerPage} totalPosts={renderedProductsList} paginate={paginate}>
            {showProducts(currentPosts)}
        </Products>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);