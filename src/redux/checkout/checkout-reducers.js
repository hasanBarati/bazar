
import CHECKOUTTYPE from './checkout-type'

const initial_state={
    hidden:true,
  
}

const CheckoutReducer=(state=initial_state,action)=>{
    switch(action.type){
        case CHECKOUTTYPE.MODAL:
            return{
                ...state,
                hidden:!state.hidden
            }
        default:return state    
    }
}

export default CheckoutReducer

