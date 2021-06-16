import { combineReducers } from "redux";
import shopReducer from './shop/shop-reduce'
import CartReducers from './cart/cart-reducers'
const rootReducer=combineReducers({
    shop:shopReducer,
    cart:CartReducers
})

export default rootReducer