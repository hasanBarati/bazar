import { combineReducers } from "redux";
import shopReducer from './shop/shop-reduce'
import CartReducers from './cart/cart-reducers'
import CheckoutReducer from './checkout/checkout-reducers'
const rootReducer=combineReducers({
    shop:shopReducer,
    cart:CartReducers,
    checkout:CheckoutReducer
})

export default rootReducer