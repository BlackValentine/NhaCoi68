import './../../App.css'
import './ProductsFunction.css'

function ProductsFunction(props) {

    const { postsPerPage, totalPosts, paginate } = props;
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts.length / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className='products__change-page'>
            <button className='products__page-icon'>
                <i className="fas fa-arrow-left"></i>
            </button>

            <ul className="pagination">
                {pageNumbers.map(number => {
                    return (
                        <li
                            className='products__page-number'
                            key={number}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </li>
                    )
                })}
            </ul>

            <button
                className='products__page-icon'
            >
                <i className="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default ProductsFunction;