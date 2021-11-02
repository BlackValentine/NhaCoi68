import React from 'react';
import {connect} from 'react-redux'
import DetailCart from '../components/detailCart/detailCart';

function DetailCartContainer(props) {
    const {cart} = props;
    
    return (
        <DetailCart cart={cart}/>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(DetailCartContainer);