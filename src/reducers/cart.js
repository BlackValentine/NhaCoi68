import * as type from './../constant/ActionType'

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    const {product, quantity} = action;
    switch(action.type) {
        case type.ADD_TO_CART:
            state.push(
                {product,
                quantity}
            )
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}

export default cart;