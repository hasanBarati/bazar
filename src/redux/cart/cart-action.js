import CARTTYPE from './cart-type'

export const toggleCart=()=>({
    type:CARTTYPE.TOGGLE_CART
})

export const addItem=item=>({
    type:CARTTYPE.ADD_ITEM,
    payload:item
})

export const removeItem=item=>({
    type:CARTTYPE.REMOVE_ITEM,
    payload:item
})

export const clearCart=()=>({
    type:CARTTYPE.CLEAR_CART
})