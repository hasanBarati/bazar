import React from 'react'
import {ReactComponent as ShopingIcon} from '../../assests/svg/cart.svg'
import {connect} from 'react-redux'
function CartIcon() {
    return (
        <div>
            <ShopingIcon className="color-green" />

           
        </div>
    )
}

export default CartIcon
