import React from 'react'
import {connect} from 'react-redux'
import {addItem} from '../../../redux/cart/cart-action'
function CardSingle({item,addItem}) {
    const {name,price,imgurl}=item
   
    return (
        <div  className="cardsection col-md-3   p-0 bg-white ">
           <div className="view zoom z-depth-2 rounded">
                <img className="w-100" src={imgurl} />
  
           </div>
          <div className="info p-3">
            <div className="prices d-flex justify-content-between">
               <span className="d-flex justify-content-end">{name}</span>
                <span className="d-flex justify-content-end">{price} </span>
                
            </div>
    
              <button className="buy btn btn-light mt-2" onClick={()=>addItem(item)}>
                  <span className="decrease d-none">-</span>   افزودن به سبد خرید   <span className="increase">+</span>
            </button>
           </div>
        </div>   
    )
}
const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps)(CardSingle)
