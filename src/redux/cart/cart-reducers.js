import { addItem } from './cart-action'
import CARTTYPE from './cart-type'
import {AddItemToCart,RemoveItemFromCart} from './cart-utils'
const initial_state={
    hidden:true,
    cartItems:[]
}
 
 const CartReducers=(state=initial_state,action)=>{
    switch(action.type){
        case CARTTYPE.TOGGLE_CART:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CARTTYPE.ADD_ITEM:
            return{
                ...state,
                cartItems:AddItemToCart(state.cartItems,action.payload)
            }  
        case CARTTYPE.REMOVE_ITEM:
            return{
                ...state,
                cartItems:RemoveItemFromCart(state.cartItems,action.payload)
            }       
        // case CARTTYPE.REMOVE_ITEM_CART:
        //     return{
        //         ...state,
        //         cartItems:state.cartItems.filter(cartitem=>cartitem.id != action.payload.id)
        //     } 
        case CARTTYPE.CLEAR_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartitem=>cartitem.id != action.payload.id)
            }  
            default:return state      
    }

 }

 export default CartReducers