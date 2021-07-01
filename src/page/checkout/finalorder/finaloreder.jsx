import React from 'react'
import {selectCartTotal,selectCartItems} from '../../../redux/cart/cart-selector'
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
const FinalOrder=(cartItems,totalprice)=> {

    return (
        <div>
             <table className="w-100">
                 <tbody>
                  {cartItems?cartItems.map(item=>
                     
                       <tr key={item.id}>
                      
                       <td>{item.quantity}</td>
                       <td>{item.price}</td>
                       <td>{item.name}</td>

                       </tr>
                     )}
                     <tr><td>{totalprice}ff</td></tr>
                  </tbody>
              </table>
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
 
    totalprice:selectCartTotal,
    cartItems:selectCartItems
 })
export default connect(mapStateToProps)(FinalOrder)
