import React from 'react'
import {ReactComponent as ShopingIcon} from '../../assests/svg/cart.svg'
import {connect} from 'react-redux'
import './carticon.style.css'
import {selectCartItemsCount,selectCartTotal} from '../../redux/cart/cart-selector'
import {createStructuredSelector} from 'reselect'
import {toggleCart} from '../../redux/cart/cart-action'
function CartIcon({ itemscount,totalprice,toggleCart}) {
   

    return (
        <div className="cartbox p-3 rounded text-white" onClick={toggleCart}>
            <div className="d-flex justify-content-between mb-2">
               <ShopingIcon className="color-green" />
               <span>{itemscount}</span>
            </div>
            <div className="price bg-white text-red p-1 rounded">
                {totalprice}
            </div>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
   itemscount:selectCartItemsCount,
   totalprice:selectCartTotal
})
const mapDispatchToProps=dispatch=>({
    toggleCart:()=>dispatch(toggleCart())
})
export default connect (mapStateToProps,mapDispatchToProps) (CartIcon)
