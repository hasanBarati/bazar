import React from 'react'
import {selectCartItems} from '../../redux/cart/cart-selector'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
const CartDropDown=({cartItems})=>{
    return (
        <div>
            
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems
})
export default connect(mapStateToProps)( CartDropDown)
