import React from 'react'
import CartDropDown from '../../components/cart-dropdwn/cart-dropwn'
import CartIcon from '../../components/carticon/carticon'
import './cartsection.style.css'
import {selectCartHidden} from '../../redux/cart/cart-selector'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
const CartSection=({ hidden})=> {
    return (
        <div className={ `${hidden? "h-0":"h-100"} cartsection position-fixed top-0 start-10` } >
            {hidden?<CartIcon  />: null}
            
             {hidden?null:<CartDropDown  />}
           
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    hidden:selectCartHidden
})
export default  connect(mapStateToProps) (CartSection)
