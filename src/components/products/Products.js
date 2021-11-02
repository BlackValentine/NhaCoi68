import './../../App.css'
import './Products.css'
import ProductsFunction from './ProductsFunction';
import ProductsNav from './ProductsNav';

function Products(props) {

    const { match, totalPosts, postsPerPage, paginate } = props;

    return (
        <div className='products container grid section'>

            <ProductsNav match={match} />

            <div className='products__content'>
                <ul className="trending__list products__list">
                    {props.children}
                </ul>

                <ProductsFunction postsPerPage={postsPerPage} totalPosts={totalPosts} paginate={paginate} />
            </div>
        </div>
    );
}

export default Products;
