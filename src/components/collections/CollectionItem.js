import './Collections.css'
import './../../App.css'

function CollectionsItem(props) {
    var { collection } = props;
    return (
        <li className='collections__item'>
            <img className='collections__item-img' alt='Collections' style={{ backgroundImage: `url(${collection.image})` }} />
            <h2 className='collections__item-title'>{collection.name}</h2>
            <p className='collections__item-quantity'>{collection.quantity} Sản Phẩm</p>
            <button className='button button-flex'>Đi đến bộ sưu tập</button>
        </li>
    );
}

export default CollectionsItem;
