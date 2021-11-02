import LinkPage from '../../components/general/LinkPage';
import ProductsContainer from '../../containers/ProductsContainer';
import './../../App.css'


function ProductsPage() {
    return (
        <div className='page'>
            <LinkPage
                title={'Products'}
                link={'Products'}
            />

            <ProductsContainer />
        </div>
    );
}

export default ProductsPage;
