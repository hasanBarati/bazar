import React from 'react'
import './cart-dropwn.style.css'
import {selectCartItems,selectCartItemsCount} from '../../redux/cart/cart-selector'
import {ReactComponent as ShopingIcon} from '../../assests/svg/cart.svg'
import { createStructuredSelector } from 'reselect'
import {connect} from 'react-redux'
import {removeItem,addItem,clearCart,toggleCart} from '../../redux/cart/cart-action'
const CartDropDown=({cartItems,addItem,removeItem,clearCart,toggleCart,cartItemsCount})=>{
    return (
        <div className="carddropwn p-3 h-100  bg-white rounded ">
            <div className="cartheader d-flex justify-content-between ">
               <span className="arrow" onClick={toggleCart} >&#10005;</span>
               <span className="shopicon"><span className="totalicon m-2">{cartItemsCount}</span><ShopingIcon /></span>
             
            </div>
            <hr/>
           { cartItems?cartItems.map(item=>(
               <div className="itemsoncart mt-2 d-flex justify-content-around align-items-center">
                <span className="remove-button" onClick={()=>removeItem(item)}>&#10005;</span>
                <div className="quantity">
                    <span className="arrow" onClick={()=>removeItem(item)}>&#10094;</span>
                    <span className='value'>{item.quantity}</span> 
                    <span className="arrow" onClick={()=>addItem(item)}>&#10095;</span>
                </div>
                <span>{item.quantity}</span>
                <span>{item.price}</span>
                <img src={item.imgurl} />
                <span>{item.name}</span>
                </div>
           )):null}
           <button className="checkoutbtn btn">پرداخت</button>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    cartItemsCount:selectCartItemsCount
})
const mapDispatchToProps=dispatch=>({
    removeItem:item=>dispatch(removeItem(item)),
    addItem:item=>dispatch(addItem(item)),
    clearCart:item=>dispatch(clearCart(item)),
    toggleCart:()=>dispatch(toggleCart())
   
})
export default connect(mapStateToProps,mapDispatchToProps)( CartDropDown)
