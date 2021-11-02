
import { combineReducers } from "redux";
import products from './../reducers/products'
import collections from "./collections";
import cart from "./cart";

const appReducers = combineReducers({
    products,
    collections,
    cart
});

export default appReducers;