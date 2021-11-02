import React from 'react';
import LinkProduct from './../components/general/LinkProduct'
import DetailProduct from './../components/detailProduct/DetailProduct'

function DetailProductContainer(props) {
    return (
        <div className='page'>
            <LinkProduct />
            <DetailProduct />
        </div>
    );
}

export default DetailProductContainer;