import * as type from './../constant/ActionType'

export const actAddToCart = (product, quantity) => {
    return {
        type: type.ADD_TO_CART,
        product,
        quantity
    }
}