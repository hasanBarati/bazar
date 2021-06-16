import React from 'react'
import {ReactComponent as ShopingIcon} from '../../assests/svg/cart.svg'
import {connect} from 'react-redux'
import './carticon.style.css'
function CartIcon() {
    return (
        <div className="cartbox p-3 rounded">
            <div className="d-flex justify-content-between mb-2">
               <ShopingIcon className="color-green" />
               <span>12</span>
            </div>
            <div className="price bg-white text-red p-1 rounded">
                20000
            </div>
            
           
        </div>
    )
}

export default CartIcon
