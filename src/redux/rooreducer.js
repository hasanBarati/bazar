import { combineReducers } from "redux";
import shopReducer from './shop/shop-reduce'

const rootReducer=combineReducers({
    shop:shopReducer
})

export default rootReducer